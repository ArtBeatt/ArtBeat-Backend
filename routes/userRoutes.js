import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser
} from "../controllers/userController.js";

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

export default router;