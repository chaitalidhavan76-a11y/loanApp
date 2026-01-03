import AutoLoan from "../models/AutoLoan.js";

// @desc    Submit a new auto loan application
// @route   POST /api/applications/auto
// @access  Private (must be logged in)
export const createAutoloan = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      vehicleType,
      vehiclePrice,
      loanAmount,
      employmentStatus,
      monthlyIncome,
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !vehicleType || !vehiclePrice || !loanAmount || !employmentStatus || !monthlyIncome) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create auto loan application
    const autoloan = await AutoLoan.create({
      userId: req.user._id,
      loanType: "auto",
      fullName,
      email,
      phone,
      vehicleType,
      vehiclePrice,
      loanAmount,
      employmentStatus,
      monthlyIncome,
    });

    res.status(201).json({
      success: true,
      message: "Auto loan application submitted successfully!",
      data: autoloan,
    });
  } catch (error) {
    console.error("Error creating auto loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: error.message,
    });
  }
};

// @desc    Get all my auto loan applications
// @route   GET /api/applications/auto
// @access  Private
export const getMyAutoloan = async (req, res) => {
  try {
    const autoloans = await AutoLoan.find({
      userId: req.user._id,
      loanType: "auto"
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: autoloans.length,
      data: autoloans,
    });
  } catch (error) {
    console.error("Error fetching auto loan applications:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

// @desc    Get single auto loan application by ID
// @route   GET /api/applications/auto/:id
// @access  Private
export const getAutoloanById = async (req, res) => {
  try {
    const autoloan = await AutoLoan.findById(req.params.id);

    if (!autoloan) {
      return res.status(404).json({
        success: false,
        message: "Auto loan application not found",
      });
    }

    // Check if user owns this application
    if (autoloan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this application",
      });
    }

    res.status(200).json({
      success: true,
      data: autoloan,
    });
  } catch (error) {
    console.error("Error fetching auto loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch application",
      error: error.message,
    });
  }
};

// @desc    Update auto loan application (only if pending)
// @route   PUT /api/applications/auto/:id
// @access  Private
export const updateAutoloanApplication = async (req, res) => {
  try {
    const autoloan = await AutoLoan.findById(req.params.id);

    if (!autoloan) {
      return res.status(404).json({
        success: false,
        message: "Auto loan application not found",
      });
    }

    // Check ownership
    if (autoloan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this application",
      });
    }

    // Only allow update if the status is pending
    if (autoloan.status !== "pending") {
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
      "vehicleType",
      "vehiclePrice",
      "loanAmount",
      "employmentStatus",
      "monthlyIncome",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        autoloan[field] = req.body[field];
      }
    });

    await autoloan.save();

    res.status(200).json({
      success: true,
      message: "Auto loan application updated successfully",
      data: autoloan,
    });
  } catch (error) {
    console.error("Error updating auto loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message,
    });
  }
};

// @desc    Delete auto loan application (only if pending)
// @route   DELETE /api/applications/auto/:id
// @access  Private
export const deleteAutoloanApplication = async (req, res) => {
  try {
    const autoloan = await AutoLoan.findById(req.params.id);

    if (!autoloan) {
      return res.status(404).json({
        success: false,
        message: "Auto loan application not found",
      });
    }

    // Check ownership
    if (autoloan.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this application",
      });
    }

    // Only allow deletion if pending
    if (autoloan.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete application under review",
      });
    }

    await autoloan.deleteOne();

    res.status(200).json({
      success: true,
      message: "Auto loan application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting auto loan application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: error.message,
    });
  }
};