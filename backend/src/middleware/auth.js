import jwt from "jsonwebtoken";
import Lender from "../models/Lender.js";
import { env } from "../config/env.js";

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
