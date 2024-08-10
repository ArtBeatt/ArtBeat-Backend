const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const postSchema = new mongoose.Schema({ // Define a schema and model for posts
  imageUrl: String,
  caption: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, process.env.UPLOADS_DIR);
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });




// Route to handle image uploads
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const caption = req.body.caption;

    // Save post details to MongoDB
    const newPost = new Post({
      imageUrl: `/uploads/${file.filename}`,
      caption: caption,
    });

    await newPost.save();
    res.status(200).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Error creating post' });
  }
});



// Serve static files
app.use('/uploads', express.static(uploadsDir));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});