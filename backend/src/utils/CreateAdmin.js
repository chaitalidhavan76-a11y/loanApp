import bcrypt from "bcryptjs";
import admin from "../models/Admin.js";
import {logger} from "./logger.js"

const createAdmin = async () => {
  const adminExist = await admin.findOne({ email: "admin@email.com" });
  if (!adminExist) {
    const hashedPassword = await bcrypt.hash("Admin@123", 10);
    await admin.create({
      email: "admin@email.com",
      password: hashedPassword,
    });
     logger.info("Default Admin Created");
  }
};

export default createAdmin;