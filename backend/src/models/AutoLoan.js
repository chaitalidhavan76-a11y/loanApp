import mongoose from "mongoose";

<<<<<<< HEAD
const autoLoanSchema = new mongoose.Schema(
  {
=======
const autoloanSchema = new mongoose.Schema(
  {
    // User reference
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

<<<<<<< HEAD
    // FIXED: Removed enum restriction, or use correct enum values
    loanType: {
      type: String,
      default: "auto",
      // No enum - allows any value
    },

    fullName: {
      type: String,
      required: true,
=======
    loanType: {
      type: String,
      default: "auto",
      enum: ["auto"],
    },

    // Personal information
    fullName: {
      type: String,
      required: [true, "Full name is required"],
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
      trim: true,
    },

    email: {
      type: String,
<<<<<<< HEAD
      required: true,
      lowercase: true,
      trim: true,
=======
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
    },

    phone: {
      type: String,
<<<<<<< HEAD
      required: true,
=======
      required: [true, "Phone number is required"],
      trim: true,
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
    },

    vehicleType: {
      type: String,
<<<<<<< HEAD
      required: true,
      enum: ["car", "bike", "truck", "suv", "other"],
=======
      enum: ["car", "bike", "scooter"],
      required: [true, "Vehicle type is required"],
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
    },

    vehiclePrice: {
      type: Number,
<<<<<<< HEAD
      required: true,
=======
      required: [true, "Vehicle price is required"],
      min: [1, "Vehicle price must be greater than 0"],
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
    },

    loanAmount: {
      type: Number,
<<<<<<< HEAD
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "under_review", "approved", "rejected"],
=======
      required: [true, "Loan amount is required"],
      min: [1000, "Loan amount must be at least 1000"],
    },

    employmentStatus: {
      type: String,
      enum: ["Salaried", "Self-Employed", "Business"],
      required: [true, "Employement Status is required"],
    },

    monthlyIncome: {
      type: Number,
      required: [true, "Monthly income is required"],
    },

    // Application status
    status: {
      type: String,
      enum: ["pending", "under-review", "approved", "rejected"],
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
      default: "pending",
    },

    adminNotes: {
      type: String,
      default: "",
    },
<<<<<<< HEAD

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
=======
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
// Indexes for better query performance
autoLoanSchema.index({ userId: 1, createdAt: -1 });
autoLoanSchema.index({ status: 1 });

const AutoLoan = mongoose.model("AutoLoan", autoLoanSchema);

export default AutoLoan;
=======
export default mongoose.model("AutoLoan", autoloanSchema);
>>>>>>> 7bfdd9d425fa9aa88efe63777d1b72556d07bb96
