const BookModel1= require("../models/bookModel1")
// 2. assignment 
// createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook1= async function (req, res) {
    let data= req.body

    let savedData= await BookModel1.create(data)
    res.send({msg: savedData})
}

module.exports.createBook1= createBook1
// 3. assignment
// bookList : gives all the books- their bookName and authorName only 
const BookList1= async function (req, res) {
    //let data= req.body
    let allBooks= await BookModel1.find().select({authorName:1,bookName:1})
    res.send({msg: allBooks})
}
module.exports.BookList1= BookList1
// 4. assignment
// getBooksInYear: takes year as input in post request and gives list of all books published that year
const getBookListInyear= async function (req, res) {
    let newYear = req.body.year
    let allBooks= await BookModel1.find({ year:newYear })
    res.send({msg: allBooks})
}
module.exports.getBookListInyear= getBookListInyear

const getXINRBooks= async function (req, res) {
    //let INRprice = req.body.price
    let allBooks= await BookModel1.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}});
    res.send({msg: allBooks})
}
module.exports.getXINRBooks= getXINRBooks

const getParticularBooks= async function (req, res) {
    //let INRprice = req.body
    let allBooks= await BookModel1.find(req.body)
    res.send({msg: allBooks})
}
module.exports.getParticularBooks= getParticularBooks

const getRandomBooks= async function (req, res) {
    //let INRprice = req.body
    let allBooks= await BookModel1.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: allBooks})
}
module.exports.getRandomBooks= getRandomBooks