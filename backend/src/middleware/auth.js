import jwt from "jsonwebtoken";
import Lender from "../models/Lender.js";
import User from "../models/User.js"; // Add this import
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

// NEW: User authentication for loan applications
export const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";

    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: "Not authorized, no token provided" 
      });
    }

    const decoded = jwt.verify(token, env.jwtSecret);

    // Find user by ID from token
    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: "User not found" 
      });
    }

    req.user = user; // Attach full user object to request
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false,
      message: "Not authorized, token failed" 
    });
  }
};