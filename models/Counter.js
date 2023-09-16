const mongoose = require('mongoose');
const CounterSchema = mongoose.Schema({
    counterNumber:{type:Number,required:true,unique:true},
    transactionName:{type:String,required:true},
    counterStatus:{type:String},
});
module.exports=mongoose.model('Counter',CounterSchema);