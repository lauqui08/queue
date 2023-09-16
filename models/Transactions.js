const mongoose = require('mongoose');
const moment = require('moment-timezone');
// const moment = require('moment');
const TransactionSchema = mongoose.Schema({
    counterNumber:{type:Number},
    customerName:{type:String},
    queuingNumber:{type:Number,default:1},
    createdTime:{type:String,default:moment(Date.now()).tz('Asia/Manila').format()},
    assistedBy:{type:String},
    transactionStart:{type:String},
    transactionEnd:{type:String},
    transactionStatus:{type:String,default:'queue'},
    remarks:{type:String},
});

module.exports=mongoose.model('Transaction',TransactionSchema);