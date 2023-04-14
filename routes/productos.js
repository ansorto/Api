const express = require("express");
const { Double, Decimal128 } = require("mongodb");

const router = express.Router();


const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaProducto = new schema({
    nombre: String,
    descripcion: String,
    precio: Decimal128,
    image: String,
    fecha: Date,
    idProd: String
})
const ModeloProducto = mongoose.model("productos", schemaProducto);


router.get("/home", (req, res) => {
    res.send("BIENVENIDO A PRODUCTOS");
})
router.post("/agregar", (req, res) => {
    const { idProducto, nombre, descripcion, precio, image } = req.body;
    const base64Image = image['base64']['base64']
    const nuevoProducto = new ModeloProducto({
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        idProd: idProducto,
        fecha: new Date(),
        image: base64Image
    })
    nuevoProducto.save().then((succes) => {
        console.log("AGREGADO", success);
        res.send("Producto agregado correctamente" + succes)
    }).catch((err) => {
        console.log(err);
        res.send("Ha oucurrido un error al agregar" + err)

    })
})

router.get("/getProductos", (req, res) => {
    ModeloProducto.find({}).then((success) => {

        res.send(success)
    }
    ).catch((err) => { res.send(err) })

})

router.post('/delete', (req, res) => {

    ModeloProducto.findByIdAndDelete({ _id: req.body._id }).then((succ) => { res.send(succ) }).catch((err) => { res.send(err) })
})
module.exports = router;



// <article className="productArticle" key={product._id}>
//     <header className="productHeader">
//         <img
//             className='tw-followCard-avatar'
//             alt='El avatar de midudev'
//             src={`https://unavatar.io/asor7o`}
//         />
//         <div className='tw-followCard-info'>
//             <strong>{product.name}</strong>
//             <span className='tw-followCard-infoUserName'>{product.description}</span>
//         </div>
//         <div className="">
//             <strong>L{product.price}</strong>
//         </div>
//     </header>
{/* <aside>
                <button onClick={() => { deleteProductMutation.mutate(product.id) }} className="btnEliminar">Eliminar</button>
                <button onClick={() => { updateProductMutation.mutate(product) }} className="btnUpdate">Actualizar</button>
            </aside> */}
        // </article >