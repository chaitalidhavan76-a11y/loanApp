import mongoose from "mongoose";

const StudentLoanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    loanType: {
      type: String,
      enum: ["student"],
      default: "student",
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    courseName: {
      type: String,
      required: true,
    },

    institute: {
      type: String,
      required: true,
    },

    loanAmount: {
      type: Number,
      required: true,
    },

    guardianAnnualIncome: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Studentloan", StudentLoanSchema);
