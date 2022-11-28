// const { Router } = require('express'); 
const express = require('express');
const Faculty=require('../model/faculty')
const mongoose=require('mongoose');

const router=express.Router();

router.get('/' ,( req , res , next)=> {
    res.status(200).json({
        msg:'this is faculty reques'
    })
})


router.post('/' ,( req , res , next)=> {
    const faculty=new Faculty({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        code:req.body.code
    
    
    })
    
    // save in db 
    faculty.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            newFaculty:result
        })
    } )
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    })
    





module.exports = router;