import mongoose from "mongoose";

const autoloanSchema = new mongoose.Schema(
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
        //personal information ;
        fullName:{
            type: String,
            required: [true, "Full name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,

        },
        phone: {
         type: String,
         required: [true, "Phone number is required"],
         trim: true,
        },
        vehicleType: {
            type: String,
            enum: ["car", "Bike", "Scooter"],
            required: [true, "vehicleType is required"],

        },
        vehiclePrice:{
            required: [true, "vehicle price is required"],
            min: [0,"Price above 0"],
        },
        loanAmount: {
            type: Number,
            required: [true, "loanAmount is required"],
            enum:[1000, "Loan Amount is required"],

        },
        //Application status,
        status: {
            type: String,
            enum: ["pending", "under-review", "approved", "rejected"],
            default: "pending",
        },
        adminNotes: {
            type:String,
            default: "",
        },

    },
    {
        timestamps: true,  //Automatically adds createdAt and updatedAt
    }
);
export default mongoose.model("AutoLoan", autoloanSchema);