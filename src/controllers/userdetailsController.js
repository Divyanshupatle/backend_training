const mongoose= require("mongoose")
// - Write a GET api to fetch user details. Pass the userId as path param in the url. Check that request must contain x-auth-token header. If absent, return a suitable error.
// If present, check that the token is valid.

const getdata= async function(req,res){
    let token= req.Headers["x-auth-token"]
    if(!token){
        res.send({status:false, msg:"token is must be present"})
    }

    let 
}