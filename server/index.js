import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/db.js';

import DefaultData from './default.js';

import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
 
const app =   express();  // initiatlize express
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)
const PORT =8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


// creating connection with database
Connection(username, password);

// creating express server
app.listen(PORT,()=>{
    console.log("Server Started at 8000")
})


// saving default data to database
DefaultData();