import BusinessLoan from "../models/BusinessLoan.js";

// @desc    Submit a new business loan application
// @route   POST /api/applications/business
// @access  Private (must be logged in)
export const createBusinessLoan = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      businessName,
      businessType,
      annualTurnover,
      loanAmountRequired,
    } = req.body;

    // Validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !businessName ||
      !businessType ||
      !annualTurnover ||
      !loanAmountRequired
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create a business loan application
    const businessLoan = await BusinessLoan.create({
      userId: req.user._id,
      loanType: "business",
      fullName,
      email,
      phone,
      businessName,
      businessType,
      annualTurnover,
      loanAmountRequired,
    });

    res.status(201).json({
      success: true,
      message: "Business loan application submitted successfully!",
      data: businessLoan,
    });
  } catch (error) {
    console.error("Error creating business loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: error.message,
    });
  }
};

// @desc    Get all my business loan applications
// @route   GET /api/applications/business
// @access  Private
export const getMyBusinessLoan = async (req, res) => {
  try {
    const businessLoans = await BusinessLoan.find({
      userId: req.user._id,
      loanType: "business",
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: businessLoans.length,
      data: businessLoans,
    });
  } catch (error) {
    console.error("Error fetching business loans:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

// @desc    Get single business loan application by ID
// @route   GET /api/applications/business/:id
// @access  Private
export const getMyBusinessLoanById = async (req, res) => {
  try {
    const businessLoan = await BusinessLoan.findById(req.params.id);

    if (!businessLoan) {
      return res.status(404).json({
        success: false,
        message: "Business loan application not found",
      });
    }

    // Check if user owns this application
    if (businessLoan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this application",
      });
    }

    res.status(200).json({
      success: true,
      data: businessLoan,
    });
  } catch (error) {
    console.error("Error fetching business loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch application",
      error: error.message,
    });
  }
};

// @desc    Update business loan application (only if pending)
// @route   PUT /api/applications/business/:id
// @access  Private
export const updateBusinessLoanApplication = async (req, res) => {
  try {
    const businessLoan = await BusinessLoan.findById(req.params.id);

    if (!businessLoan) {
      return res.status(404).json({
        success: false,
        message: "Business loan application not found",
      });
    }

    // Check ownership
    if (businessLoan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this application",
      });
    }

    // Only allow update if the status is pending
    if (businessLoan.status !== "pending") {
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
      "businessName",
      "businessType",
      "annualTurnover",
      "loanAmountRequired",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        businessLoan[field] = req.body[field];
      }
    });

    await businessLoan.save();

    res.status(200).json({
      success: true,
      message: "Business loan application updated successfully",
      data: businessLoan,
    });
  } catch (error) {
    console.error("Error updating business loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message,
    });
  }
};

// @desc    Delete business loan application (only if pending)
// @route   DELETE /api/applications/business/:id
// @access  Private
export const deleteBusinessLoanApplication = async (req, res) => {
  try {
    const businessLoan = await BusinessLoan.findById(req.params.id);

    if (!businessLoan) {
      return res.status(404).json({
        success: false,
        message: "Business loan application not found",
      });
    }

    // Check ownership
    if (businessLoan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this application",
      });
    }

    // Only allow deletion if pending
    if (businessLoan.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete application under review",
      });
    }

    await businessLoan.deleteOne();

    res.status(200).json({
      success: true,
      message: "Business loan application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting business loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: error.message,
    });
  }
};