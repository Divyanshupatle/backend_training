const bookmodel = require("../models/bookmodel1")
const AuthorModel= require("../models/bookmodel1")

const createAuthor= async function (req,res){
    let data= req.body
    let savedData= await AuthorModel.create(data)

    res.send({msg:savedData,m2:"done"})
}

const book1= async function (req,res){
    let data= req.body
    let savedData= await bookmodel.create(data)

    res.send({msg:savedData,_id:0})
}


module.exports.book1= book1
module.exports.createAuthor= createAuthor
