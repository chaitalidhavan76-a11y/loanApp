import Personal from "../models/Personal.js";
import StudentLoan from "../models/StudentLoan.js";

export const applyStudentLoan = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      courseName,
      institute,
      loanAmount,
      guardianAnnualIncome,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !courseName ||
      !institute ||
      !loanAmount ||
      !guardianAnnualIncome
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const studentLoan = await StudentLoan.create({
      userId: req.user.id, // from auth middleware
      fullName,
      email: req.user.email, // secure source
      phone,
      courseName,
      institute,
      loanAmount,
      guardianAnnualIncome,
      loanType: "student",
    });

    res.status(201).json({
      success: true,
      message: "Student loan application submitted successfully",
      data: studentLoan,
    });
  } catch (error) {
    console.error("Student Loan Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while submitting application",
    });
  }
};
