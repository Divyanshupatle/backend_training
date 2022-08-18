
const AuthorModel= require("../models/bookmodel1")

const createAuthor= async function (req,res){
    let data= req.body
    let savedData= await AuthorModel.create(data)

    res.send({moment:savedData,m2:"done"})
}

module.exports.createAuthor= createAuthor
