import mongoose from "mongoose";
// import dotenv from 'dotenv'

// dotenv.config()

const uri_link = process.env.MONGO_URI;

mongoose.connect(uri_link)
    .then(()=> console.log('Database connected'))
    .catch(error => console.log(error))