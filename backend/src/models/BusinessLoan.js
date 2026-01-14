import mongoose from "mongoose";

const BussinessLoanSchema = new mongoose.Schema(
  {
    // User reference
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    loanType: {
      type: String,
      default: "business",  // Changed from "auto"
      enum: ["business"],
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
    businessName: {  // Changed from BussinessName
      type: String,
      required: [true, "Business name is required"],
      trim: true,
    },
    businessType: {  // Changed from BussinessType
      type: String,
      enum: ["sole", "partnership", "pvt", "public"],
      required: [true, "Business Type is required"],
    },
    annualTurnover: {
      type: Number,
      required: [true, "Annual turnover is required"],
      min: [0, "Annual turnover cannot be negative"],
    },
    loanAmountRequired: {
      type: Number,
      required: [true, "Loan amount is required"],
      min: [1000, "Loan amount must be at least ₹1000"],
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
  },
  {
    timestamps: true,  // Fixed: was "timestamp"
  }
);

const BusinessLoan = mongoose.model("BusinessLoan", BussinessLoanSchema);
export default BusinessLoan;