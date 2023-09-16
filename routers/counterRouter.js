const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');


router.get('/',async(req, res)=>{
    try {
        const counters = await Counter.find({});
        if(counters){
            return res.json(counters);
        }else{
            return res.json({message:'No records found!'})
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({message:'Encountered error!Please try again!'});
    }
});

router.post('/',async(req, res)=>{
    const {counterNumber, transactionName,counterStatus} = req.body;
    try {
        const counter = await Counter.create({counterNumber, transactionName,counterStatus});
        if(counter){
            return res.json(counter);
        }else{
            return res.status(422).json({message:'Transaction failed.'})
        }
    } catch (error) {
        console.log(error);
        return res.status(422).json({message:'You must provide new counter number.'});
    }
});

router.get('/:id',async(req, res)=>{
    const {id} = req.params;
    try {
        const counter = await Counter.findOne({_id:id});
        if(counter){
            return res.json(counter);
        }else{
            return res.json({message:'No records found!'})
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({message:'Encountered error!Please try again!'});
    }
});

router.patch('/:id',async(req, res)=>{
    const {id} = req.params;
    const {counterNumber, transactionName,counterStatus} = req.body;
    try {
        const counter = await Counter.findOneAndUpdate({_id:id},{counterNumber, transactionName,counterStatus});
        if(counter){
            return res.json(counter);
        }else{
            return res.json({message:'No records found!'})
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({message:'Encountered error!Please try again!'});
    }
});

router.delete('/:id',async(req, res)=>{
    const {id} = req.params;
    try {
        const counter = await Counter.findOneAndDelete({_id:id});
        if(counter){
            return res.json(counter);
        }else{
            return res.json({message:'No records found!'})
        }
    } catch (error) {
        console.log(error);
        return res.status(408).json({message:'Encountered error!Please try again!'});
    }
});

module.exports=router;