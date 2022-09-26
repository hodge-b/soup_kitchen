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

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


// API routes
app.get('/api/get', (req, res) => {
    const query = "SELECT * FROM soup_kitchen_inventory";
    db.query(query, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insert', (req, res) => {
    const itemName = req.body.itemName;
    const itemImageLocation = req.body.itemImageLocation;
    const itemQuantity = req.body.itemQuantity;

    const query = "INSERT INTO soup_kitchen_inventory (itemName, itemImageLocation, itemQuantity) VALUES (?,?,?);";
    db.query(query, [itemName, itemImageLocation, itemQuantity], (err, result) =>{
        console.log(err);
    })

})


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})