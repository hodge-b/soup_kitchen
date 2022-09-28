const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soupkitchendatabase'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// API routes
app.get('/api/get', (req, res) => {
    const query = "SELECT * FROM soup_kitchen_inventory";
    db.query(query, (err, result) => {
        res.send(result);
    })
})

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})