const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook1", BookController1.createBook1)

router.get("/bookList1", BookController1.BookList1)

router.post("/getBookListInyear", BookController1.getBookListInyear)

router.post("/getXINRBooks", BookController1.getXINRBooks)

router.post("/getParticularBooks", BookController1.getParticularBooks)

router.post("/getRandomBooks", BookController1.getRandomBooks)

module.exports = router;