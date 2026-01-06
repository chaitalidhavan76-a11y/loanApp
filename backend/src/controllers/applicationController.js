import Application from "../models/homeloan.js";

// @desc    Submit a new home loan application
// @route   POST /api/applications
// @access  Private (must be logged in)

export const createApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      employmentStatus,
      annualIncome,
      loanAmount,
      loanTenure,
    } = req.body;

    // Create application
    const application = await Application.create({
      userId: req.user._id,
      loanType: "home",
      fullName,
      email,
      phone,
      address, // Fixed: Added address
      employmentStatus,
      annualIncome,
      loanAmount,
      loanTenure,
    });

    res.status(201).json({
      success: true,
      message: "Home loan application submitted successfully!",
      data: application,
    });
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: error.message,
    });
  }
};

// @desc    Get all my home loan applications
// @route   GET /api/applications
// @access  Private

export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      userId: req.user._id,
      loanType: "home",
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error("Error fetching application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

// @desc    Get single application by ID
// @route   GET /api/applications/:id
// @access  Private

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Check if user owns this application
    if (application.userId.toString() !== req.user._id.toString()) {
      // Fixed: _id
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this application",
      });
    }

    res.status(200).json({
      success: true,
      data: application, // Fixed: data instead of date
    });
  } catch (error) {
    console.error("Error fetching application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch application",
      error: error.message,
    });
  }
};

// @desc    Update application (only if pending)
// @route   PUT /api/applications/:id
// @access  Private
export const updateApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Check ownership
    if (application.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // Only allow updates if status is pending
    if (application.status !== "pending") {
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
      "address",
      "employmentStatus",
      "annualIncome",
      "loanAmount",
      "loanTenure",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        application[field] = req.body[field];
      }
    });

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      data: application,
    });
  } catch (error) {
    console.error("Error updating application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message,
    });
  }
};

// @desc    Delete application (only if pending)
// @route   DELETE /api/applications/:id
// @access  Private
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Check ownership
    if (application.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // Only allow deletion if pending
    if (application.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete application under review",
      });
    }

    await application.deleteOne();

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application",
      error: error.message,
    });
  }
};

export const getAllHomeApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};
