const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    status:{type:String,required:true,default:'for-activation'},
    acountType:{type:String,required:true,default:'employee'},
});
module.exports=mongoose.model('Employee',EmployeeSchema);