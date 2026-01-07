import mongoose from "mongoose";

const personalLoanSchema = new mongoose.Schema(
  {
    //User reference
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    loanType: {
      type: String,
      default: "personal",
      enum: ["personal"],
    },
    // Personal Information (from your form);
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is requireed"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    //Employment Information ( from your form);
    employmentStatus: {
      type: String,
      enum: ["salaried", "self-employed", "business", "retired"],
      required: true,
    },

    monthlyIncome: {
      type: Number,
      required: true,
      min: [0, "monthly income cannot be negative"],
    },

    //Loan details from form;
    loanAmount: {
      type: Number,
      required: [true, "LoanAmount is required"],
      min: [1000, "Loan amount must be at least ₹1000"],
    },
    purposeOfLoan: {
      type: String,
      required: true,
    },

    //Application Status
    status: {
      type: String,
      enum: ["pending", "under-review", "approved", "rejected"],
      default: "pending",
    },
    //Admin notes
    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, //Automatically adds createdAt and updatedAt
  }
);
export default mongoose.model("Personal Loans", personalLoanSchema);
