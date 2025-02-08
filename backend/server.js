import express from 'express';
import nodemon from 'nodemon';
import  db  from "./db/connection.js"
// const express =require('express')
const app =express()
app.use(express)
app.get('/',(req,res)=>{
res.send("Server started");
// res.end();
})
app.listen(4000,()=>{
     console.log('Server is running on http://localhost:4000')
})