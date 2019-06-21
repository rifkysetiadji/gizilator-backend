const express=require('express')
const app=express();
// const mongo=require('./config/mongo')
const bodyParser=require('body-parser')
const route=require('./routes')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',route)
app.listen(8000,()=>console.log('listen on 80000'))