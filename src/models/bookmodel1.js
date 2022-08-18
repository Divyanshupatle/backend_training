const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    
        name: String,
   author_id: Number,
       price: Number,
     ratings: Number

})
module.exports= mongoose.model('Book',bookSchema)


const authorSchema = new mongoose.Schema({
    
   authorId:Number,
 authorName: String,
         age: Number,
     address: String,
     
},{ timestamps: true })

module.exports= mongoose.model('Author',authorSchema)