const newuserModel = require("../models/userdocumentModel")

const userdoc= async function(req, res) {
    let user= req.body
    let creatuser= await newuserModel.findById(user.body.userId)
    res.send({data:creatuser,msg:"true"}) 

}
module.exports.userdoc= userdoc
