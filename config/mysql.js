const mysql=require('mysql')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"gizilator"
});
con.connect((err)=>{
    if(err) throw err;
})
module.exports=con  