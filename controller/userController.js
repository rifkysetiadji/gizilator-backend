const User=require('../model/user')
const jwt=require('jsonwebtoken')
const secret=require('../config/secret')
const bcrypt=require('bcryptjs')
const conn=require('../config/mysql');
module.exports={
    register: (req,res)=>{
        const newPass= bcrypt.hashSync(req.body.password)
        const {name,email,usia,pekerjaan,bb,tb,jk} =req.body;
        conn.query('insert into user (name,email,password,usia,pekerjaan,bb,tb,jk )values (?,?,?,?,?,?,?,?)',[name,email,newPass,usia,pekerjaan,bb,tb,jk],(err,result)=>{
            if(err) res.send({auth:false,msg:err})
            // res.send({auth:true,})
            // console.log('result',result.insertId);
            let token=jwt.sign({id:result.insertId},secret.secret,{
                expiresIn:86400
            });
            res.send({auth:true,token:token})

        })

    },
    login:(req,res)=>{
        let {email,password}=req.body;
        conn.query('select * from user where email = ?',[email],(err,result)=>{
            if(err) res.send({auth:false,msg:err})
            // console.log('pass',result[0].password)
            let newPass=bcrypt.compareSync(password,result[0].password)
            if(newPass){
                let token=jwt.sign({id:result[0].id},secret.secret,{
                    expiresIn:86400
                })
                res.send({auth:true,token:token})
            }else{
                res.send({auth:false,msg:'wrong password'})
            }
            
        })
    },
    
}