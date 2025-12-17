import express from "express";
import HomeLoan from "../models/homeLoanModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await HomeLoan.create(req.body);
    res.status(201).json({ message: "Home loan application submitted!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
