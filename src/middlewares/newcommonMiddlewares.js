const orderdocumentModel = require("../models/orderdocumentModel")
const productdocumentModel = require("../models/productdocumentModel")
const userdocumentModel = require("../models/userdocumentModel")
const newuserModel = require("../models/userdocumentModel")

const newmid= function(req,res,next){
    let a= req.body.isFreeAppUser
    if(!a){
        return res.send({status:false,msg:"the request is missing a mandatory header"})
    }else{
        next()
    }
}

const newmid2= async function(req,res,next){
    let order= req.body
    if(!order){
        return res.send({msg:"this is requred"})
    }else{
       return res.send({data:creatuser,msg:"true"}) 
    }}

    const newmid3= async function(req,res,next){
        let order= req.headers.isFreeAppUser
        let creatuser= await newuserModel.findById(order.userId)
        if(!creatuser){
            return res.send({msg:"this is requred"})
        }else{
            res.send({data:creatuser,msg:"true"}) 
        }  
    

 
}

module.exports.newmid=newmid
module.exports.newmid2=newmid2