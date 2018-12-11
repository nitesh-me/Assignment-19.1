const express= require('express');
const router = express.Router();







var arr=[];

router.get('/',(req,res)=>{
    res.render('sign.ejs');
});


router.post('/',(req,res)=>{
    var data ={
        email: req.body.email,
        name: req.body.name,
        password:req.body.password
    }
    console.log(data);
    arr.push(data);
    console.log(arr);
    res.redirect('/login');
});
router.get('/login',(req,res)=>{
    res.render('login.ejs');
})
router.post('/login',(req,res)=>{
    var logdata={
        email:req.body.email,
        password:req.body.password
    }
    var len = arr.length;
    console.log(arr);
    console.log(len);
    console.log(logdata);
    for(var i=0;i<len;i++){
        
        if(logdata.email ==arr[i].email && logdata.password == arr[i].password){
            res.send("login detail - email="+ logdata.email +" password ="+logdata.password)
        }
    
        if(logdata.email !=arr[i].email || logdata.password != arr[i].password){
            res.redirect('/login');
        }
    }
    // res.send(logdata);
})


module.exports = router;
