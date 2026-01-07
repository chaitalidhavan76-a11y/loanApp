import express from "express";
import { applyPersonalLoan } from "../controllers/personalLoanController.js";
import { auth } from "../middleware/auth.js";
import { applyStudentLoan } from "../controllers/StudentLoanController.js";

const router = express.Router();

router.post("/personal-loan", auth, applyPersonalLoan);
router.post("/student-loan", auth, applyStudentLoan);

export default router;
