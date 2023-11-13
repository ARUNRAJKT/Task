const mongoose=require('mongoose')
const schema=mongoose.Schema;
const loginSchema=new schema({
    customerName:{type:String},
    username:{type:String},
    password:{type:String},
    gender:{type:String},
    preferredCategory:{type:String}
   
})
const loginModel=mongoose.model("user_creds",loginSchema)
module.exports=loginModel
   