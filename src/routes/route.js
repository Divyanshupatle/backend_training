const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

//assignment

router.post("/createbook",UserController.createbook)
router.get("/getbooks", UserController.getbooks)

let person =[
    {
        name: "pk",
        age: 10,
        votingstatus: false
    },
    {
        name: "sk",
        age: 20,
        votingstatus: false
    },
    {
        name: "sp",
        age: 40,
        votingstatus: false
    },
    {
        name: "ho",
        age: 70,
        votingstatus: false
    },
    {
        name: "oo",
        age: 5,
        votingstatus: false
    },
]
router.post("/voting", function (req, res) {
    inputAge=req.query.votingAge;
    person.map(per=>(per.age>inputAge)?per.votingstatus=true:per.votingstatus);
    let final=person.filter(pson=>{if(pson.votingstatus==true){return pson.name}});
    res.send({data:final});
});


module.exports = router;