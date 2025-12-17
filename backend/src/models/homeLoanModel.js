import mongoose from "mongoose";

const homeLoanSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  employmentStatus: String,
  annualIncome: Number,
  loanAmount: Number,
  loanTenure: Number,
});

export default mongoose.model("HomeLoan", homeLoanSchema);
