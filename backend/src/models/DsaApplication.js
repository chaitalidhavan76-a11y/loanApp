import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  dsaId: { type: mongoose.Schema.Types.ObjectId, ref: "DSA" },
  amount: Number,
  status: {
    type: String,
    enum: ["submitted", "approved", "disbursed", "rejected"],
  },
});

export default mongoose.model("DsaApplication", applicationSchema);
