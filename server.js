const express = require('express');
const cors = require("cors");

const boyParse = require("body-parser");
const app = express();

const bd = require('./connection');
const rutaProducto = require("./routes/productos");
const rutaPedidos = require("./routes/pedidos");
const rutaUsuario = require("./routes/usuario");

app.use(boyParse.json())
app.use(boyParse.urlencoded({ extended: false, limit: '50mb' }))
app.use(cors());


app.get("/", (req, res) => {
    res.send("bien")
})
app.use('/api/producto', rutaProducto);
app.use('/api/pedidos', rutaPedidos);
app.use('/api/usuario', rutaUsuario);
// 

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT " + port);
})