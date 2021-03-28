require("dotenv").config()
var cors = require('cors');
const { getDataDb,postDataDb} =require ('./database');
const express = require('express');

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/getData/:id', getDataDb);
app.post('/postData',postDataDb);
app.listen(8000, () => console.log('Example app listening on port 3000!'));