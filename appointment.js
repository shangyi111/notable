const express = require('express');
const router = express.Router();
const con = require('./data').con;
const url = require('url');



router.get('/get',(req,res,next)=>{
    const urlParts = url.parse(req.url, true);
    const query = urlParts.query;
    const doctorId = query.doctorId;
    const date = query.date; 
    console.log(query);
    const sql = `select * from Appointments where doctor_id=${doctorId} and date =${date} `;
    con.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})

router.delete('/delete/:appointmentId',(req,res,next)=>{
    const apptId = req.params.appointmentId;
    const sql =`delete from Appointments where id =${apptId};`;
    con.query(sql,(err,result)=>{
        if(err){
            res.status().send(err);
        }else{
            res.send(result);
        }
    })
})

router.post('/add',(req,res,next)=>{
    // console.log(req);
    const doctor_id = req.body.doctor_id;
    const patient_first_name = req.body.patient_first_name;
    const patient_last_name = req.body.patient_last_name;
    const date = req.body.date;
    const time = req.body.time;
    const kind = req.body.kind;
   
    //check intervals
    const timeArr = time.split(":");
    const hour = timeArr[0];
    const min = timeArr[1];
    const sec = timeArr[2];
    
    if(sec!=="00" || Number(min)%15 !== 0){
        res.send({
            errorMsg:"Wrong time format"
        });
        return;
    }
   
    
    //check doctor cannot have more than three appointments
    const selectDoctorSql=`select count(*) as aCount from Appointments where doctor_id=${doctor_id} and date="${date}" and time="${time}"`
    con.query(selectDoctorSql,(err,result)=>{
        if(err){
            res.status().send(err);
        }else{
            const numberOfAppts = result[0].aCount;
            
            if(numberOfAppts>2){
                res.send({
                    errorMsg:"Doctor already have three patients for the same time slot."
                })
            }else{
                 const sql =`insert into Appointments (doctor_id,patient_first_name,patient_last_name,date,time,kind)
                values (${doctor_id}, '${patient_first_name}','${patient_last_name}',"${date}","${time}",${kind})`;
                con.query(sql,(err,result)=>{
                    if(err){
                        res.status().send(err);
                    }else{
                        res.send({
                            result,
                            message:"Added success"
                        });
                    }
                })
            }
        }
    })
   
})




module.exports = router;