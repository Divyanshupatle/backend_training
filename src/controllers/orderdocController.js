const orderdocumentModel = require("../models/orderdocumentModel")
const productdocumentModel = require("../models/productdocumentModel")
const userdocumentModel = require("../models/userdocumentModel")
const newuserModel = require("../models/userdocumentModel")

const createorder = async function (req, res) {
    let user = req.body
    let userid = user.userId
    let productid = user.productId
    let newuser = await newuserModel.findById({ "_id": userid })
    let newproduct = await productdocumentModel.findById({ "_id": productid })
    let creatuser = await newuserModel.findOne({ "_id": userid }, { "isFreeAppUser": 1, "_id": 0 })
    let token = user.isFreeAppUser = creatuser.isFreeAppUser
    let val = 0;
    if (token === "true") {
        user["amount"] = val;
        user.isFreeAppUser = true
        let creatuse = await orderdocumentModel.create(user)
        res.send({ data: creatuse })
    }
    else if (token === "false") {
        user.isFreeAppUser = false
        if (newuser.balance >= newproduct.price) {
            await newuserModel.findOneAndUpdate({ _id: userid },
                { $set: { balance: newuser.balance - newproduct.price } }, { balance: 1 })
            user["amount"] = newproduct.price

            let creatuse = await orderdocumentModel.create(user)
            res.send({ data: creatuse })
        } else {
            res.send("Insuficient balance")
        }
    }
}
const createorder2 = async function (req, res) {
    let createorder = await orderdocumentModel.create(order)
    return res.send({ data: createorder })
}
module.exports.createorder = createorder
module.exports.createorder2 = createorder2