const express=require('express')
const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        
let connection=await mongoose.connect('mongodb+srv://parteek:Parteek%402803@cluster0.z5wmfmk.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
return connection
}catch(error){
    console.log('connection error');
    throw console.log(error);
}
}

module.exports=connectDB;
