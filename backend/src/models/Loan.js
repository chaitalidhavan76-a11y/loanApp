import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    loanType: {
      type: String,
      required: true,
      enum: ["home", "auto", "personal", "business", "student"]
    },

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    address: String,
    employmentStatus: String,
    annualIncome: Number,
    loanAmount: { type: Number, required: true },
    loanTenure: String,

    vehicleType: String,
    vehiclePrice: Number,
    monthlyIncome: Number,

    reason: String,

    courseName: String,
    instituteName: String,
    parentIncome: Number,

    businessName: String,
    businessType: String,
    turnover: Number,

    extraDetails: {
      type: Object,
      default: {}
    }
  },
  { timestamps: true }
);

loanSchema.index({ loanType: 1 });
loanSchema.index({ email: 1 });
loanSchema.index({ phone: 1 });

export default mongoose.model("LoanApplication", loanSchema);
