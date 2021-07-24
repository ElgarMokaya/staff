const mongoose=require('mongoose')
//const mongoose=require('mongoose')

const regformSchema=new regform.Schema({
name:{type:String,required:true},
email:{},
password:{type:String,required:true},
gender:{type:String,required:true},
//tsc no:{},





})
module.exports=mongoose.model('Regform',regformSchema)