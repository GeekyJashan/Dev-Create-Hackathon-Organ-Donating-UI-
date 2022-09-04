const mongoose=require('mongoose');

const schema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    organ:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String
    }


})

module.exports=mongoose.model('organ_data',schema);
