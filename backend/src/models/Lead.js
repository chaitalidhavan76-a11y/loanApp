import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    loanType: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
    employmentStatus: String,
    annualIncome: Number,
    loanAmount: { type: Number, required: true },
    loanTenure: String,

    extraDetails: {
      type: Object,
      default: {}
    },

    matchedLenders: [
      {
        lenderId: { type: mongoose.Schema.Types.ObjectId, ref: "Lender" },
        sentAt: Date,
        status: { type: String, default: "matched" }
      }
    ],

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lender",
      default: null
    },

    status: {
      type: String,
      default: "new",
      enum: ["new", "contacted", "in-review", "approved", "rejected", "sold"]
    },

    score: { type: Number, default: 0 },
    source: String,

    documents: [
      {
        url: String,
        name: String
      }
    ]
  },
  { timestamps: true }
);

leadSchema.index({ fullName: "text", email: "text", phone: "text" });
leadSchema.index({ loanType: 1 });
leadSchema.index({ assignedTo: 1 });
leadSchema.index({ "matchedLenders.lenderId": 1 });

export default mongoose.model("Lead", leadSchema);
