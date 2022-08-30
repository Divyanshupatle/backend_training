const user1Model = require("../models/user1Model")
//          2. Write a POST api to register a user from the user details in request body. 
let creatUser1= async function(req,res){
    let userData= req.body
    let saveData= await user1Model.create(userData)
    res.send({msg:saveData})
}

module.exports.creatUser1=creatUser1