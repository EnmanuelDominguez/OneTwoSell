const express=require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get("/",(req,res)=>{
    mysqlConnection.query("SELECT * FROM prueba",(err,rows,fields)=>{
        res.json(rows[0])
    })
    
})
module.exports=router;