import Personal from "../models/Personal.js";

export const applyPersonalLoan = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      employmentStatus,
      monthlyIncome,
      loanAmount,
      purposeOfLoan,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !employmentStatus ||
      !monthlyIncome ||
      !loanAmount ||
      !purposeOfLoan
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const personalLoan = await Personal.create({
      userId: req.user.id, // from auth middleware
      fullName,
      email: req.user.email, // secure source
      phone,
      employmentStatus,
      monthlyIncome,
      loanAmount,
      purposeOfLoan,
      loanType: "personal",
    });

    res.status(201).json({
      success: true,
      message: "Personal loan application submitted successfully",
      data: personalLoan,
    });
  } catch (error) {
    console.error("Personal Loan Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while submitting application",
    });
  }
};
