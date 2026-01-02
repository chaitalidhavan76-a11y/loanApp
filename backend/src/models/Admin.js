import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[ true,"Email is Required"]
    },
    password:{
        type: String,
        required: [true, "Password is Required"]
    }
})

export const admin = mongoose.model("Admin",adminSchema);
export default admin;