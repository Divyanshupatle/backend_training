const userdocumentModel = require("../models/orderdocumentModel")

const createorder= async function(req, res) {
    let order= req.body
    let createorder= await userdocumentModel.create(order)
    res.send({data:createorder}) 

}
module.exports.createorder= createorder