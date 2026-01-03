import bcrypt from "bcryptjs";
import admin from "../models/Admin.js";
import { logger } from "./logger.js";

const createAdmin = async () => {
  const adminExist = await admin.findOne({ email: "admin@email.com" });
  if (!adminExist) {
    const hashedPassword = await bcrypt.hash("Admin@123", 10);
    await admin.create({
      email: "admin@email.com",
      password: hashedPassword,
    });
    logger.info("Default Admin Created");
  }
};

const getAdminEmail = async (req, res) => {
  try {
    const adminId = req.adminId;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const adminDoc = await admin.findById(adminId).select("email");

    if (!adminDoc) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      email: adminDoc.email,
    });
  } catch (error) {
    console.error("Error getting admin email:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const changeAdminPassword = async (req, res) => {
  try {
    const adminid = await admin.findById(req.adminId);
    if (!adminid) {
      return res.status(404).json({ message: "Admin not found" });
    }
    const { currentPassword, newPassword, confirmPassword } = req.body;
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const matchPassword = await bcrypt.compare(
      currentPassword,
      adminid.password
    );
    if (!matchPassword) {
      return res.status(400).json({ message: "Password is not Matched" });
    }
    if (newPassword != confirmPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    adminid.password = hashedPassword;
    await adminid.save();
    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Change admin password error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export { createAdmin, getAdminEmail, changeAdminPassword };
