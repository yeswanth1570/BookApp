const mongoose = require('mongoose');
require('dotenv').config();
let { MONGO_URL } = process.env;
let connectMongo = async () =>{
    try {
        let connect = await mongoose.connect(MONGO_URL);
        if(connect) {
            console.log('MongoDB connected successfully');
        }
    } catch (error) {
        console.log('Error while connecting the mongodb',error);
    }
};

module.exports = connectMongo;