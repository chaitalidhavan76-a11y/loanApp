import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
   },
   email: {
    type: String,
    required: [true,"Your email is required"],
    unique: true,
   },
   password: {
    type: String,
    required: [true, "Your password is required"],
   },
   createdAt: {
    type: Date,
    default: Date.now,
   },
});

userSchema.pre("save", async function (){
  if(!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

export const User = mongoose.model("User", userSchema);
export default User;