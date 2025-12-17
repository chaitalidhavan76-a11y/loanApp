import mongoose from "mongoose";

const lenderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },

    passwordHash: { type: String, required: true },

    role: { type: String, default: "lender" },

    apiEndpoint: { type: String, trim: true },

    apiKeyHash: { type: String },

    commissionPercent: { type: Number, default: 1 },

    loanTypes: {
      type: [String],
      index: true
    },

    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Lender", lenderSchema);
