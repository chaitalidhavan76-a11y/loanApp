import PersonalLoan from "../models/personalLoan.js"; // Capitalized model name to avoid conflict

// @desc    Submit a new personal loan application
// @route   POST /api/applications/personal
// @access  Private (must be logged in)
export const createPersonalLoan = async (req, res) => {
  try {
    const {
      fullName,
      email, // Changed from Email to email (camelCase convention)
      phone,
      employmentStatus,
      monthlyIncome,
      loanAmount,
      purpose,
    } = req.body;

    // 1. Validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !employmentStatus ||
      !monthlyIncome ||
      !loanAmount ||
      !purpose
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // 2. Create personal loan application
    const newLoan = await PersonalLoan.create({
      userId: req.user._id,
      loanType: "personal", // FIXED: Was "auto"
      fullName,
      email,
      phone,
      employmentStatus,
      monthlyIncome,
      loanAmount,
      purpose,
    });

    res.status(201).json({
      success: true,
      message: "Personal loan application submitted successfully",
      data: newLoan,
    });
  } catch (error) {
    console.log("Error creating personal loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: error.message,
    });
  }
};

// @desc    Get all my personal loan applications
// @route   GET /api/applications/personal
// @access  Private
export const getMyPersonalLoan = async (req, res) => {
  try {
    const loans = await PersonalLoan.find({
      userId: req.user._id,
      loanType: "personal", // Ensure we only get personal loans
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: loans.length,
      data: loans,
    });
  } catch (error) {
    console.log("Error fetching personal loan application");
    res.status(500).json({
      success: false,
      message: "Failed to fetch the applications",
      error: error.message,
    });
  }
};

// @desc    Get single personal loan application by ID
// @route   GET /api/applications/personal/:id
// @access  Private
export const getPersonalLoanById = async (req, res) => {
  try {
    const loan = await PersonalLoan.findById(req.params.id);

    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Personal loan application not found",
      });
    }

    // Check if the user owns this application
    if (loan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this application",
      });
    }

    res.status(200).json({
      success: true,
      data: loan,
    });
  } catch (error) {
    console.error("Error fetching personal loan application", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch application",
      error: error.message,
    });
  }
};

// @desc    Update personal loan application (only if pending)
// @route   PUT /api/applications/personal/:id
// @access  Private
export const updatePersonalLoanApplication = async (req, res) => {
  try {
    let loan = await PersonalLoan.findById(req.params.id);

    // FIXED: Added missing 'if' statement
    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Personal loan application not found",
      });
    }

    // Check ownership
    if (loan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this application",
      });
    }

    // Only allow update if the status is pending
    if (loan.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Cannot update application that is under review",
      });
    }

    // Update fields
    const allowedUpdates = [
      "fullName",
      "email",
      "phone",
      "employmentStatus",
      "monthlyIncome",
      "loanAmount",
      "purpose",
    ]; // FIXED: Removed vehicle fields

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        loan[field] = req.body[field];
      }
    });

    await loan.save();

    res.status(200).json({
      success: true,
      message: "Personal loan application updated successfully",
      data: loan,
    });
  } catch (error) {
    console.error("Error updating personal loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message,
    });
  }
};

// @desc    Delete personal loan application (only if pending)
// @route   DELETE /api/applications/personal/:id
// @access  Private
export const deletePersonalLoanApplication = async (req, res) => {
  try {
    // FIXED: Changed AutoLoan to PersonalLoan
    const loan = await PersonalLoan.findById(req.params.id);

    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Personal loan application not found",
      });
    }

    // Check ownership
    if (loan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this application",
      });
    }

    // Only allow deletion if pending
    if (loan.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete application under review",
      });
    }

    await loan.deleteOne();

    res.status(200).json({
      success: true,
      message: "Personal loan application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting personal loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: error.message,
    });
  }
};
