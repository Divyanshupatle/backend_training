const mongoose = require('mongoose');
const newuserSchema = new mongoose.Schema( {
    name: String,
	balance:{
        type:Number,
        default:100
    }, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender: {
        type: String,
        enum: ["male", "female", "other"]
    }, // Allowed values are - “male”, “female”, “other”
    isFreeAppUser:{
        type:String,
        default:"false"
    }
	
});
module.exports = mongoose.model('Newuser', newuserSchema) //users