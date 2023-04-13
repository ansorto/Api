const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaPedidos = new schema({
    idPedido: String,
    idProducto: String,
    idCliente: String,
    fechaPedido: Date,
    totalPedido: String,
    descripcionPedido: String,
    ubicacionPedido: String

})

const ModeloPedido = mongoose.model("pedidos", schemaPedidos);

router.post("/agregar", (req, res) => {
    console.log(req.body);
})
router.get("/", (req, res) => {
    res.send("LISTO PEDIDOS")
})
router.post("/delete", (req, res) => {
    console.log(req.body);
})



module.exports = router;