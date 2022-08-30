const mongoose = require("mongoose")
//            1. ======= - Your user document should look like this ===============
// ```
//  	{
//     "_id" : ObjectId("6226e3d2b98f22b349ca58be"),
//     "firstName" : "Sabiha",
//     "lastName" : "Khan",
//     "mobile" : "9898909087",
//     "emailId" : "sk@gmail.com",
//     "password" : "password123",
//     "gender" : "female",
// 	"isDeleted": false, //default value is false 
//     "age" : 12,
//     "createdAt" : ISODate("2022-03-08T05:04:18.737Z"),
//     "updatedAt" : ISODate("2022-03-08T05:04:18.737Z"),
//     "__v" : 0
// }
const user1Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: String,
    isDeleted:{
        type:Boolean,
        default:false
    }, //default value is false 
    age:Number
},{timestamps:true});

module.exports= mongoose.model("user1",user1Schema)