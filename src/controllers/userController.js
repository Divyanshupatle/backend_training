const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
   let data= req.body
   let savedData= await UserModel.create(data)
   res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

//assignment
const createbook= async function (req, res) {
    let books= req.body
    let savedbooks= await UserModel.create(books)
    res.send({msg:savedbooks, statu:"true"})
}

const getbooks= async function (req, res) {
    let allbooks= await UserModel.find();
    res.send({msg:allbooks})
}

module.exports.createbook=createbook
module.exports.getbooks=getbooks