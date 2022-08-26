const mongoose = require('mongoose');

const productdocumentSchema = new mongoose.Schema( {
    name:String,
	category:String,
	price:{
        type:Number,
        required:true
    } //mandatory property

	

});

module.exports = mongoose.model('productdocument', productdocumentSchema) //users