import express from "express";

const router = express.Router();

import { register, login } from "../controllers/authController";

router.route("/login").post(login);
router.route("/register").post(register);

export default router;
