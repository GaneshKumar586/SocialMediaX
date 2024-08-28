import express from "express";
import { routeCheckup } from "../middleware/routeCheckup.js";
import { deleteNotifications, getNotifications } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", routeCheckup, getNotifications);
router.delete("/", routeCheckup, deleteNotifications);

export default router;