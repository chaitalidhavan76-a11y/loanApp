import express from "express";
import {
   createAutoloan,
   getMyAutoloan,
   getAutoloanById,
   updateAutoloanApplication,
   deleteAutoloanApplication,
} from "../controllers/autoloanController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

//All routes require authentication
router.use(authenticate);

//POST /api/application - create new homeloan application
router.post("/", createAutoloan);

//GET /api/application - get all my application
router.get("/", getMyAutoloan);

//GET /api/application/:id - get single application
router.get("/:id", getAutoloanById);

//PUT/ api / applications/:id - update application
router.put("/:id", updateAutoloanApplication);

//DELETE / api/application/:id - DELETE application
router.delete("/:id", deleteAutoloanApplication);

export default router;