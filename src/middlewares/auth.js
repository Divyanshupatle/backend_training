const jwt = require("jsonwebtoken");

const validateToken = function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  req.extractUseId = decodedToken.userId
  next()
}
const userAuthorisation = async function (req, res, next) {
  let userId = req.params.userId;
  
  if (userId !== req.extractUseId) {
    return res.send("No such user exists");
  }
next()
}

/*const userAuthorisation = async function (req, res,next) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  next()
};
*/

module.exports.userAuthorisation = userAuthorisation
module.exports.validateToken = validateToken