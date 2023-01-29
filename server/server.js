const express = require("express");
const products = require("./db/db");

const app = express();

app.get('/products', function (req, res) {
    res.json(products);
})

console.log("Server running 5000")


app.listen(5000);