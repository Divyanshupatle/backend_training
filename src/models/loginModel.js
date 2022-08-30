const mongoose = require("mongoose")
// - Write a POST api to login a user that takes user details like email and password from the request body.
const loginSchema = new mongoose.Schema({

    emailId: String,
    password: String,

}, { timestamps: true });

module.exports = mongoose.model("loginUser", loginSchema)