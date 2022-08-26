const mongoose = require('mongoose');

const orderdocumentSchema = new mongoose.Schema( {
    
	userId:{
        type:Object,
        ref:"Newuser"
    },

	productId:{
        type:Object,
        ref:"productdocument"
    },

	amount: Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
	date:String
});

module.exports = mongoose.model('orderdocument', orderdocumentSchema) //users