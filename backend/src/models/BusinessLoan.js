import mongoose from "mongoose";

const BussinessLoanSchema= new mongoose.Schema(
     {
        //User reference
        userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,

        },
        loanType: {
            type: String,
            default:"auto",
            enum:["auto"],
        },
    // Personal information
      fullName: {
        type: String,
        required:[true, "Full name is required"],
        trim: true,
      },
      email: {
        type: String,
        required: [true,"Email is required"],
        trim: true,
        lowercase: true,
      },
      phone: {
        type: String,
        required: [true,"Phone number is required"],
        trim:true,
      },
      BussinessName: {
        type: String,
        required:[true, "Bussiness name is required"],
        trim: true,
      },
      BussinessType: {
        type:String,
        enum: ["sole propritorship", "partnership","Private Limited","public Limited"],
        required: [true, "Bussiness Type is required"],
      },
       annualTurnover: {
      type: Number,
      required: true,
      min: [0, "Annual income cannot be negative"],
    },
    loanAmountRequired: {
      type: Number,
      required: [true, "LoanAmount is required"],
      min: [1000, "Loan amount must be at least ₹1000"],
    },
    //Application status
    status:{
        type:String,
        enum: ["pending", "under-review", "approved", "rejected"],
        default: "pending",
    },
    adminNotes: {
        type: String,
        default: "",

    },



     },
     {
        timestamp: true,
     }
);
const bussinessLoan= mongoose.model("bussinessLoan", BussinessLoanSchema);
export default bussinessLoan;
    
