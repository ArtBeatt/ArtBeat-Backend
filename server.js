require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");


app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(3000);
