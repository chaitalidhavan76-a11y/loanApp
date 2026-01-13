import express from "express";
import {
  createApplication,
  getMyApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// POST /api/applications - Create new home loan application
router.post("/create", createApplication);

// GET /api/applications - Get all my applications
router.get("/", getMyApplications);

// GET /api/applications/:id - Get single application
router.get("/:id", getApplicationById);

// PUT /api/applications/:id - Update application
router.put("/:id", updateApplication);

// DELETE /api/applications/:id - Delete application
router.delete("/:id", deleteApplication);

export default router;