import mongoose from "mongoose";

const autoLoanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // FIXED: Removed enum restriction, or use correct enum values
    loanType: {
      type: String,
      default: "auto",
      // No enum - allows any value
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "bike", "truck", "suv", "other"],
    },

    vehiclePrice: {
      type: Number,
      required: true,
    },

    loanAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "under_review", "approved", "rejected"],
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