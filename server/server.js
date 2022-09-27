const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// API routes


app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})