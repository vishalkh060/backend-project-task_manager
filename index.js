const express=require('express');
const app=express();
//setting up the parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//setting up ejs for ejs pages 
app.set('view engine','ejs');
//setting up public static file
const path=require('path')
console.log(path.join(__dirname,'public'));
app.get("/",function(req,res){
    res.render("index.ejs")
})
app.get("/profile/:username",function(req,res){
  res.send(`wwlcome,${req.params.username}`) 
})
app.get("/profile/:username/:age",function(req,res){
  res.send(`Welcome ${req.params.username},${req.params.age}`)
})

app.listen(3000,function(){
    console.log("chal gaya ree");
})