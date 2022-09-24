const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})