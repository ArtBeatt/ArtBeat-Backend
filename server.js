require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const userPostRoutes = require("./routes/userPostRoutes");


app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user-posts", userPostRoutes);

app.listen(3000);
