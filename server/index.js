require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const massive = require('massive');

// const {
//     CONNECTION_STRING,
//     SESSION_SECRET
//         }  = process.env; 

const app = express();

const port = 3001;

app.use(json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`Working ${port}`);
});