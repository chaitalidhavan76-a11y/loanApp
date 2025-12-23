import dotenv from "dotenv";
dotenv.config();
const jwt = require("jsonwebtoken");

module.export.createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    });
};