const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaUsuario = new schema({
    nombre: String,
    usuario: String,
    password: String,
    telefono: String,
    direccion: String,
    lanlng: String
});

const ModeloUsuario = mongoose.model("usuario", schemaUsuario)

router.post("/registro", (req, res) => {
    const newUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,
        telefono: req.body.telefno,
        direccion: req.body.direccion,
        lanlng: req.body.lat + "," + req.body.lang
    });


    newUsuario.save().then((success) => {
        console.log("aqui");
        res.send(success)
    }).catch((err) => {
        console.log("aqui error");
        res.send(err);
    })
})
router.post("/userExist", (req, res) => {
    const user = req.body.usuario;

    ModeloUsuario.findOne({ "usuario": user }).then((succ) => {
        res.send(succ)
    }).catch((err) => {
        console.log(err);
        res.send("error")
    })
})

router.post("/login", (req, res) => {
    const { user, password } = req.body;
    ModeloUsuario.findOne({ "usuario": user, "password": password }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = router;