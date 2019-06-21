const express=require('express')
const route=express.Router();
const userController=require('../controller/userController')
const giziController=require('../controller/giziController')
route.get('/test',(req,res)=>{
    res.send('hallo')
})
route.post('/register',userController.register);
route.post('/login',userController.login);

route.post('/hitung',giziController.hitung);
module.exports=route