const express=require('express');
const app=express();
const connectDB=require('./connect');
const Organ=require('./models');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname))
app.get('/',(req,res)=>{
    // res.sendFile('./public/'+'index.html');
    res.end();
})


app.post('/donate-organ-form',(req,res)=>{
    console.log(req.body);
    Organ.insertMany([req.body]);
    res.end();
})
app.get('/request-organ',async(req,res)=>{
    // console.log(await Organ.find());
    res.json(await Organ.find());
    // res.json(await Organ.find())
    
})
const start=async()=>{
    
    
    await connectDB();

    app.listen(3000,()=>{
        console.log('server started at 3000');
    });
}

start();
