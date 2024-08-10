const express = require("express");
const router = express.Router();
import {
    getUserPosts,
    getUserSavedPosts
} from "../controllers/postController.js";

// Route to fetch user's published posts
router.route("/:id/posts").get(getUserPosts);

// Route to fetch user's saved posts
router.route("/:id/saved-posts").get(getUserSavedPosts);

export default router;
