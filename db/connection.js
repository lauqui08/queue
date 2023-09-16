const mongoose = require('mongoose');
const connection = async (uri) =>{
    try {
        await mongoose.connect(uri);
        console.log('Database Connected');
    } catch (error) {
        console.log(error.message);
    }
};
module.exports=connection;