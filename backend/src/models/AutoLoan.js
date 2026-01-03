
import mongoose from "mongoose";

const autoLoanSchema = new mongoose.Schema(
  {
    // User reference
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    loanType: {
      type: String,
      default: "auto",
      enum: ["auto"],
    },

    // Personal information
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    vehicleType: {
      type: String,
      enum: ["car", "bike", "scooter", "truck", "suv", "other"],
      required: [true, "Vehicle type is required"],
    },

    vehiclePrice: {
      type: Number,
      required: [true, "Vehicle price is required"],
      min: [1, "Vehicle price must be greater than 0"],
    },

    loanAmount: {
      type: Number,
      required: [true, "Loan amount is required"],
      min: [1000, "Loan amount must be at least 1000"],
    },

    employmentStatus: {
      type: String,
      enum: ["salaried", "self-employed", "business"],
      required: [true, "Employment status is required"],
    },

    monthlyIncome: {
      type: Number,
      required: [true, "Monthly income is required"],
      min: [0, "Monthly income must be positive"],
    },

    // Application status
    status: {
      type: String,
      enum: ["pending", "under-review", "approved", "rejected"],
      default: "pending",
    },

    adminNotes: {
      type: String,
      default: "",
    },

    rejectionReason: {
      type: String,
      default: "",
    },

    reviewedAt: {
      type: Date,
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better query performance
autoLoanSchema.index({ userId: 1, createdAt: -1 });
autoLoanSchema.index({ status: 1 });

const AutoLoan = mongoose.model("AutoLoan", autoLoanSchema);

export default AutoLoan;
