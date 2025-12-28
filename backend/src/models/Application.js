import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        //User reference
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        loanType: {
            type: String,
            default: "home",
            enum: ["home"],
        },
        // Personal Information (from your form);
        fullName:{
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
        address: {
            type: String,
            required: [true, "Address is required"],
            trim: true,
        },

        //Employment Information ( from your form);
        employmentStatus: {
            type: String,
            enum: ["salaried", "self-employed", "business", "retired"],
            required: [true, "Emplyment status is required"],
        },

        annualIncome: {
            type: Number,
            required: [true, "Annual income is required"],
            min: [0, "Annual income cannot be negative"],
        },

        //Loan details from form;
        loanAmount: {
            type: Number,
            required: [true, "LoanAmount is required"],
            min: [1000, "Loan amount must be at least ₹1000"],
        },
        loanTenure: {
            type: Number,
            required: [true, "Loan tenure is required"],
            enum: [5,10,15,20,25],
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
export default mongoose.model("Application", applicationSchema);

