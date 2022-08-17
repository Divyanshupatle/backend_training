const mongoose = require('mongoose');
// 1. assignment
//Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)
const book1Schema = new mongoose.Schema( {
    bookName:{
        require:true,
        type: String
       }, 
       authorName:String,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type: Number,
     default: 2021
    },
    tags: [String],
    totalPages:Number,
    stockAvailable:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Book1', book1Schema) 