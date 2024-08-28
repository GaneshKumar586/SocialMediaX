
import express from "express";
import { routeCheckup } from "../middleware/routeCheckup.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:username", routeCheckup, getUserProfile);
router.get("/suggested", routeCheckup, getSuggestedUsers);
router.post("/follow/:id", routeCheckup, followUnfollowUser);
router.post("/update", routeCheckup, updateUser);

export default router;
