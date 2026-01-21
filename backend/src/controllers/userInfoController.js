import UserInfo from "../models/UserInfo.js";

export const UserInfoDetails = async (req, res) => {
  try {
    console.log("🔐 AUTH USER:", req.user);

    const { dob, phoneNumber, address, pincode } = req.body;

    console.log("📥 REQUEST BODY:", req.body);

    if (!dob || !phoneNumber || !address || !pincode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const userDetails = await UserInfo.create({
      userId: req.user.id,
      dob,
      phoneNumber,
      address,
      pincode,
    });

    console.log("✅ USER INFO SAVED:", userDetails);

    res.status(201).json({
      success: true,
      message: "User Details are Updated successfully",
      data: userDetails,
    });
  } catch (error) {
    console.error("❌ USER INFO ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error while submitting application",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    console.log("📡 FETCH USER INFO ID:", req.params.id);

    const user = await UserInfo.findOne({ userId: req.user.id });

    console.log("📦 DB RESULT:", user);

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    console.error("❌ FETCH ERROR:", error);
    res.status(500).json({ success: false, message: "server Error" });
  }
};
