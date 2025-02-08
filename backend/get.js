const express =require('express')
const app=express()
app.get('/',()=>{
     res.send("Welcome");
     res.end()
})
app.post('/Employees',()=>{
const {fname,lname,age}=req.body;
const sql="INSERT INTO daysW (fname,lname,age) VALUES(?,?,?)";
db.query(sql,[fname,lname,age],(err)=>{
    if (er){
     console.log("Failed");
     res.status.json({
     message:'Failed',
     status:404
     })
    }
    else{
     console.log("New Employee Added");
     removeEventListener.status(200).json({
message:"New Employee added" ,
status:200
     })
    }
})
})
app.listen(3000,()=>{
     console.log("Server is running on http://localhost:3000")
})