const mongoose=rq('mongoose');
const userschema =new mongoose.Schema({
    name:String,
    password:String,
    email:String
})
module.exports=mongoose.nodel('ss',userschema);