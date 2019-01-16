const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const SELECT_ALL_PRODUCTS = "SELECT * FROM react_sql.products";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "civonajmedX!2019",
    database: "react_sql"
});

connection.connect(err => {
    if (err) {
        return err;
    }
});
app.use(cors());

app.get("/", (req, res, next) => {
    res.send(`hello from the products server and go to /products`);
});
app.get("/products/add", (req, res, next) => {
    const {
        products_id,
        name,
        price,
        description
    } = req.query;
    const INSERT_PRODUCTS_QUERY = 
    `INSERT INTO products (products_id, name, price, description) VALUES('${products_id}','${name}','${price}','${description}')`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("successfully added product");
        }
    });
});

app.get("/products", (req, res, next) => {
    connection.query(SELECT_ALL_PRODUCTS, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

app.listen(4000);