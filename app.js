require('dotenv').config();
const express = require('express');
const dbConnection = require('./db/connection');
const cors = require('cors');
const transactionRouter = require('./routers/transactionRouter');
const counterRouter = require('./routers/counterRouter');

const app = express();
//variables
const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_URI;
// middlewares
app.use(express.json());
app.use(cors());
//routes
app.use('/api/v1/qsystem/transactions',transactionRouter);
app.use('/api/v1/qsystem/counters',counterRouter);


const start = async() => {
    try {
        await dbConnection(URI);
        app.listen(PORT, (error) => {
            if(error){
                console.log(error);
                return;
            }
            console.log(`Server is running on port: ${PORT}...`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

start();