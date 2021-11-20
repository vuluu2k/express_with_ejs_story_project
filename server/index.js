const express = require('express')
const app = express()
const path = require('path');
const port = 8000
const route = require("./routers/index") 
const mongoose = require('mongoose');


async function connect(){
    try{
        await mongoose.connect('mongodb+srv://Admin1:1234@tutorialpost.hcsqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Db connect success !")
    }catch(e){
        console.log("Error :" + e)
    }
    
}

connect()
app.use(express.static('public'));
app.use(express.json(limit="50mb"))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
route(app)

 
app.listen(port,()=>console.log("Run in http://localhost:" + port) )
 
