const express = require('express');
const app = express();
const port = process.env.PORT  || 3000
const ejs = require('ejs');

app.set("view-engine","ejs");
app.use(express.static("public"));

app.get('/',(req,res)=>{
   res.render('index.ejs');
})
app.get('/project',(req,res)=>{
    res.render('academic.ejs');
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
})

app.listen(port);