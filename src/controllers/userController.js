const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// 2. ------------Write a POST api to register a user from the user details in request body.---------------
const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.send({ msg: savedData });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    // 3. Write a POST api to login a user that takes user details like email and password from the request body.
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not correct",
        // 4. credentials don't match with any user's data return a suitable error.
      });

    // 5. On successful login, generate a JWT token and return it both in response body.
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  }
  catch (err) {
    res.status(404).send({ error: err.message })
  }
};
// 6. Write a GET api to fetch user details
const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId; // 7. Pass the userId as path param in the url.
    let userDetails = await userModel.findById(userId);

    if (!userDetails) // 8. Check that request must contain x-auth-token header
      return res.send({ status: false, msg: "No such user exists" }); // 9. If absent, return a suitable error

    res.send({ status: true, data: userDetails });
  } catch (err) {
    res.status(300).send({ error: err.message })
  }
};
// 10. Write a PUT api to update user details.
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId //  11. Pass the userId as path param in the url
    let userData = req.body;
    // 12. and update the attributes received in the reauest body.
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.send({ status: updatedUser, data: updatedUser });
  }
  catch (err) {
    res.status(200).send({ error: err.send })
  }
};
// 13. Write a DELETE api that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain x-auth-token header. If absent, return a suitable error.
const deleteUser = async function (req, res) {

  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.send({ status: false, message: "no such user exists" })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.send({ status: true, data: updatedUser })
  }

  catch (err) {
    res.status(100).send({ error: err.send })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
