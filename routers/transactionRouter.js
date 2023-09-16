const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transactions');

router.get('/',async(req, res)=>{
    try {
        const transactions = await Transaction.find({});
        if(transactions){
            return res.json(transactions);
        }
    } catch (error) {
        console.log(error);
    }
});

// Transactions routes
router.post('/getQueueNumber',async(req, res)=>{
    const {
        counterNumber,
        customerName,
        transactionStatus,
    } = req.body;

    console.log(counterNumber);
    try {
        //check if for the next number in queue
        const checkQueuingNumber = await Transaction.findOne({
            $or:[
                {transactionStatus:'queue'},
                {transactionStatus:'serving'},
            ],$and:[
                {counterNumber}
            ]
        }).sort({_id: -1}).limit(1);

            if(checkQueuingNumber){
                //if there is a queue on the counter selected. the queue number will increament by one
                const queuingNumber = checkQueuingNumber.queuingNumber + 1;
                const transaction = await Transaction.create({counterNumber,customerName,transactionStatus,queuingNumber});
            }else{
                //if there is no queue on the counter selected. the queue number will number one
                const transaction = await Transaction.create({counterNumber,customerName,transactionStatus});
            }
        res.json({message:"Please wait for your number to called. No show within 2 mins upon displaying your number will cancel your queue."});
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;