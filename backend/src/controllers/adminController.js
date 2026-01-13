import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import DSA from "../models/DSA.js";
import DsaApplication from "../models/DsaApplication.js";

/* =========================
   ADMIN LOGIN
========================= */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      token,
      role: admin.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

/* =========================
   KPI SUMMARY (ADMIN DASHBOARD)
========================= */
export const getDsaSummary = async (req, res) => {
  try {
    const totalDSAs = await DSA.countDocuments();
    const activeDSAs = await DSA.countDocuments({ status: "active" });

    const appStats = await DsaApplication.aggregate([
      {
        $group: {
          _id: null,
          totalApplications: { $sum: 1 },
          totalDisbursed: {
            $sum: {
              $cond: [
                { $eq: ["$status", "disbursed"] },
                "$amount",
                0,
              ],
            },
          },
        },
      },
    ]);

    res.status(200).json({
      totalDSAs,
      activeDSAs,
      totalApplications: appStats[0]?.totalApplications || 0,
      totalDisbursed: appStats[0]?.totalDisbursed || 0,
    });
  } catch (error) {
    console.error("Summary error:", error);
    res.status(500).json({ message: "Failed to load summary" });
  }
};

/* =========================
   DSA PERFORMANCE TABLE
========================= */
export const getDsaPerformance = async (req, res) => {
  try {
    const data = await DsaApplication.aggregate([
      {
        $group: {
          _id: "$dsaId",
          totalApplications: { $sum: 1 },
          disbursedAmount: {
            $sum: {
              $cond: [
                { $eq: ["$status", "disbursed"] },
                "$amount",
                0,
              ],
            },
          },
        },
      },
      {
        $lookup: {
          from: "dsas",
          localField: "_id",
          foreignField: "_id",
          as: "dsa",
        },
      },
      { $unwind: "$dsa" },
      {
        $project: {
          _id: 0,
          dsaId: "$_id",
          name: "$dsa.name",
          status: "$dsa.status",
          totalApplications: 1,
          disbursedAmount: 1,
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    console.error("Performance error:", error);
    res.status(500).json({ message: "Failed to load performance data" });
  }
};

/* =========================
   APPLICATION STATUS CHART
========================= */
export const getDsaApplicationStatus = async (req, res) => {
  try {
    const stats = await DsaApplication.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(stats);
  } catch (error) {
    console.error("Status chart error:", error);
    res.status(500).json({ message: "Failed to load status data" });
  }
};

export default loginAdmin;