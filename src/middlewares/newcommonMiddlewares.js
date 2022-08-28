const orderdocumentModel = require("../models/orderdocumentModel")
const productdocumentModel = require("../models/productdocumentModel")
const userdocumentModel = require("../models/userdocumentModel")
const newuserModel = require("../models/userdocumentModel")

const newmid= function(req,res,next){
    let a= req.headers["isfreeappuser"]
    if(!a){
        return res.send({status:false,msg:"the request is missing a mandatory header"})
    }else{
        next()
    }}
    const newmid2= async function(req,res,next){
        let userid= req.body.userId
        let productc= req.body.productId
        let creatuser= await newuserModel.findById({_id:userid})
        let product= await productdocumentModel.findById({_id:productc})
        if(!creatuser && !product){
            return res.send({msg:"this is requred"})
        }
        else{
             next() 
        }}

    const newmid3= function(req,res,next){
        
    }

module.exports.newmid=newmid
module.exports.newmid2=newmid2
module.exports.newmid3=newmid3