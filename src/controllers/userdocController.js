const newuserModel = require("../models/userdocumentModel")

const userdoc= async function(req, res) {
    let user= req.body 
    let head= req.headers.isfreeappuser
    user.isFreeAppUser=head
    let creatuser= await newuserModel.create(user)
    res.send({data:creatuser}) 

}
module.exports.userdoc= userdoc
