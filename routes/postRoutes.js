const express = require("express");
const router = express.Router();
import { getPosts } from "../controllers/postController.js";

router.route("/").get(getPosts);

export default router;
