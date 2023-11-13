const express = require('express')
const app = express()
const mongoose = require('mongoose')
const login=require('./src/routes/login')
app.get('/',(req,res)=>{
    res.send("server connected")
})
app.use('/login',login)
mongoose.connect('mongodb+srv://arunraj44799:SeALliUB54wZlyhC@cluster0.ztigvi9.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(4004, () => {
        console.log("Server started at http://localhost:4004");
    });
}).catch((err) => {
    console.log(err);
})