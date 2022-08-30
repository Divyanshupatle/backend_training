const jwt = require("jsonwebtoken")
const loginmodel = require("../models/loginModel")
const user1Model = require("../models/user1Model")
//-  Write a POST api to login a user that takes user details like email and password from the request  body. 
let login = async function (req, res) {
    let emailId = req.body.emailId
    let password = req.body.password
    let matchData = await user1Model.findOne({ emailId: emailId, password: password })

    // If the credentials don't match with any user's data return a suitable error.
    if (!matchData) {
        res.send({ status: false, msg: "emailId and password is invailid" })
    } else {
        res.send({ status: true, msg: "login successfully" })

        // On successful login, generate a JWT token and return it both in response body.
        let token = jwt.sign(
            {
                firstname: "divyanshu",
                lastname: "kumar"
            }, "must-be-use-strong-secret-key"
        )
        res.setHeader("x-auth-token", token);
        res.send({ status: true, data: token });
    }
}

module.exports.login = login