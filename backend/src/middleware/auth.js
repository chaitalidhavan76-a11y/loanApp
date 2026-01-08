import jwt from "jsonwebtoken";
import Lender from "../models/Lender.js";
import User from "../models/User.js";
import { env } from "../config/env.js";

// Existing lender authentication
export const lenderAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, env.jwtSecret);

    const lender = await Lender.findById(decoded.id);
    if (!lender) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = { id: lender._id, role: "lender" };
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

// FIXED: User authentication - now supports both Cookie and Bearer token
export const authenticate = async (req, res, next) => {
  try {
    let token;

    // Method 1: Check for token in Cookie header
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
      console.log("✅ Token found in cookies");
    }
    // Method 2: Check for token in Authorization Bearer header
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.slice(7);
      console.log("✅ Token found in Authorization header");
    }

    // If no token found
    if (!token) {
      console.log("❌ No token found in cookies or headers");
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, env.jwtSecret);

    // Find user by ID from token
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user; // Attach full user object to request
    console.log("✅ User authenticated:", user.email);
    next();
  } catch (err) {
    console.error("❌ Auth error:", err.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
      error: err.message,
    });
  }
};

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    console.log("✅ User authenticated:", user.email);

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// Alias for backwards compatibility
export const protect = authenticate;
