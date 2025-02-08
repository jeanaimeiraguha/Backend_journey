import express from 'express';
import db from './db/connection.js';

const app = express();
app.use(express);

app.get('/', (req, res) => {
    res.send("Server started");
});
app.use(json)
app.post('/student',(req,res)=>{
    const Values={
        lname: req.body,
        fname:req.body ,
        age:req.body ,
    }
const sql="INSERT INTO student(fname, lname,age) Values(?,?,?)";
db.query(sql ,(err,data)=>{
if (err) {
    console.log("Failed")
    return res.status(404).json({
        status:404 ,
        message:'Student Not Registered'
    }
)
   
}
else{
    return res.status(2001).json({
        status:"2001",
        message:"Sucess"
    })
}
})
})
app.listen(1000, () => {
    console.log('Server is running on http://localhost:1000');
});
