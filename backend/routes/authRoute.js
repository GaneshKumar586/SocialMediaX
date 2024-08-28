import express from "express";
import { getMe, login, logout, signup } from "../controllers/authController.js";
import { routeCheckup } from "../middleware/routeCheckup.js";

const router = express.Router();

router.get("/me", routeCheckup, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;