require("dotenv").config();

const express = require("express");
const app = express();
//const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const pool = require("./db");
const bodyParser = require("body-parser");

app.use(express.json());

const posts = [
  {
    username: "Anika",
    title: "post 1",
  },
  {
    username: "jim_c",
    title: "post 2",
  },
];

//route, returns
app.get("/posts", (req, res) => {
  res.json(posts);
});

//login route
app.post("/login", (req, res) => {
  //recieved from the front end
  const { email, password } = req.body;

  try {
    // Check if email address exists
    // Get user from user database //TO-DO update/create user file with this function

    const user = getUserByEmail(email);

    if (!user) {
      throw new Error("Email address does not exist");
    }

    // Validate password
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid Email or Password");
    }

    // Create JWT token
    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    // Return the token
    res.json({ accessToken });
  } catch (error) {
    // Handle errors
    res.status(401).json({ message: error.message });
  }
});

//register route
app.post("/register", async (req, res) => {
  //receive from front end
  const {
    email,
    password,
    verificationStatus = false,
    verificationCode,
    role,
  } = req.body;

  if (!email || !password || !role) {
    return res
      .status(400)
      .json({ error: "Email, password, and role are required" });
  }

  if (!["Artist", "Buyer"].includes(role)) {
    return res
      .status(400)
      .json({ error: 'Role must be either "Artist" or "Buyer"' });
  }

  try {
    // Check if email address exists, i.e user already registered
    // Get user from user database //TO-DO update/create user file with this function
    const userExists = await getUserByEmail(email);

    if (userExists) {
      return res.status(400).json({ error: "Email address already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const newUser = await pool.query(
      "INSERT INTO Users (email, password, verificationStatus, verificationCode, role) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [email, hashedPassword, verificationStatus, verificationCode, role]
    );

    // Create JWT token
    const accessToken = jwt.sign(
      {
        id: newUser.rows[0].id,
        email: newUser.rows[0].email,
        role: newUser.rows[0].role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return the token
    res.status(201).json({ user: newUser.rows[0], accessToken });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(401).json({ message: error.message });
  }
});

app.listen(3000);
