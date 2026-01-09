import User from "../models/User.js";
import homeLoan from "../models/homeloan.js";

export const countUser = async (req, res) => {
  try {
    const userCount = await User.countDocuments();

    res.status(200).json({
      success: true,
      totalUsers: userCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to count users",
      error: error.message,
    });
  }
};
export const countApplications = async (req, res) => {
  try {
    const applicationCount = await homeLoan.countDocuments();

    res.status(200).json({
      success: true,
      totalApplication: applicationCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to count users",
      error: error.message,
    });
  }
};
