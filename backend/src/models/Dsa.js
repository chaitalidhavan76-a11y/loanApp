import mongoose from "mongoose";

const dsaSchema = new mongoose.Schema({
  name: String,
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("DSA", dsaSchema);
