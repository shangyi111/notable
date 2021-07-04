const express = require('express');
const router = express.Router();
const con = require('./data').con;
const url = require('url');



router.get('/getAll',(req,res,next)=>{
    con.query('select * from doctors',(err,result)=>{
        res.send(result)
    })
})

module.exports = router;