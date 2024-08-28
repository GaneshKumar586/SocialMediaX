import express from "express";
import { routeCheckup } from "../middleware/routeCheckup.js";
import {
	commentOnPost,
	createPost,
	deletePost,
	getAllPosts,
	getFollowingPosts,
	getLikedPosts,
	getUserPosts,
	likeUnlikePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/all", routeCheckup, getAllPosts);
router.get("/following", routeCheckup, getFollowingPosts);
router.get("/likes/:id", routeCheckup, getLikedPosts);
router.get("/user/:username", routeCheckup, getUserPosts);
router.post("/create", routeCheckup, createPost);
router.post("/like/:id", routeCheckup, likeUnlikePost);
router.post("/comment/:id", routeCheckup, commentOnPost);
router.delete("/:id", routeCheckup, deletePost);

export default router;