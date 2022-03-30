const express = require("express");
const port =   80;
const app = express();
// require()

app.use(express.urlencoded({extended:false}));

//Serving Files In public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

//importing mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Task");



const Schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    pan: {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
        // unique : true,
    },
    phone: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
    },
});



const Form = mongoose.model('Info', Schema);


//Body-parser import
const bodyparser = require("body-parser");





//GEt 
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})



//No Post Requests for now

// app.post("", (req, res) => {
//     var myData = new Form(req.body);
//     myData.save().then(() => {
//         res.sendFile(__dirname + '/views/index2.html');
//     }).catch(() => {
//         res.status(400).send("item was not saved to the databse")
//     })
// })




    //Server Listening
app.listen(port, () => {
    console.log("Server Sarted At Port " + port);
})