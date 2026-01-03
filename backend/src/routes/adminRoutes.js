import express from "express";
import loginAdmin from "../controllers/adminController.js";
import { changeAdminPassword, getAdminEmail } from "../utils/CreateAdmin.js";
import authAdmin from "../middleware/admin.js";
import { getAllHomeApplications } from "../controllers/applicationController.js";

const router = express.Router();

// POST /api/admin/admin-login - Admin login
router.post("/admin-login", loginAdmin);

router.get("/admin-email", authAdmin, getAdminEmail);
router.put("/change-password", authAdmin, changeAdminPassword);

// GET All Home Applications Only Admin
router.get("/All-Home-Application", authAdmin, getAllHomeApplications);

export default router;
