const jwt = require("jsonwebtoken");

const validateToken = function (req, res, next) {
  //let token = req.headers["x-Auth-token"];
  token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  req.extractUseId = decodedToken.userId
  next()
}

// 13. + Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.
const userAuthorisation = async function (req, res, next) {
  let userId = req.params.userId;

  if (userId !== req.extractUseId) {
    return res.send("No such user exists");
  }
  next()
}



module.exports.userAuthorisation = userAuthorisation
module.exports.validateToken = validateToken