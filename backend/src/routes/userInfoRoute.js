import express from "express";
import {
  getUserById,
  UserInfoDetails,
} from "../controllers/userInfoController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/update-deatils", protect, UserInfoDetails);
router.get("/:id", protect, getUserById);

export default router;
