const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const user1Controller= require("../controllers/user1Controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/registerUser",user1Controller.creatUser1)










router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)

module.exports = router;