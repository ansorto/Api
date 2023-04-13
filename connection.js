const mongoose = require('mongoose');
console.log(process.env);
const mongoConnection= process.env.MONGODBPROD
console.log(mongoConnection);
mongoose.connect(`${mongoConnection}`);

const objetoBD = mongoose.connection;

objetoBD.on('connected', () => {
    console.log("Conexion establecida a mongodb");
})
objetoBD.on('error', () => {
    console.log("Error en conexion establecida a mongodb");
})


module.exports = mongoose;