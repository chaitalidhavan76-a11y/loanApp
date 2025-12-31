import express from "express"
import loginAdmin from "../controllers/adminController.js";

const router = express.Router();

// POST /api/admin/admin-login - Admin login
router.post("/admin-login",loginAdmin)

export default router;