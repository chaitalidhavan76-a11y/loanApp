import mongoose from "mongoose";

const personalLoanSchema= new mongoose.Schema(
    {
        //user reference
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

        //personal information
        fullName: {
            type: String,
            required: [true, "Full Name is required"],
            trim: true,
        },
        Email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,


        },
        phone: {
            type: Number,
            required: [true,"Number is required"],
            trim: true,
        },
        employmentStatus: {
            type: String,
            enum: ["salaried", "self-employed"],
            required: ["true", "Employment is required"],
        },
       monthlyIncome: {
        type: String,
        required: [true, "monthly income is required"],
        default: "pending",

       },
      loanAmount: {
        type: String,
        required: [true, "Loan amount is required"],
        min: [1000, "Loan amount must be greater than 0"],
      },
      purpose: {
        type: String,
        required: [true, "Purpose is required"],
        trim: true,
      },

  //Apllication status
  status: {
    type: String,
    enum: ["pending", "under-review", "approved", "rejected"],
    default: "pending",
  },
  adminNotes: {
    type:String,
    default: "",
  },
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

    },
    {
        timestamps: true,
    }
);

personalLoanSchema.index({ userId: 1, createdAt: -1 });
personalLoanSchema.index({ status: 1 });

const personalLoan = mongoose.model("personalLoan", personalLoanSchema);
export default personalLoan;