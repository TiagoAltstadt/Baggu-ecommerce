const fs = require('fs');
let prueba = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});

let productJSON = JSON.parse(prueba);

const productosController = {
    creacion: (req, res) => {
        res.render('./products/creacionProductos.ejs');
    },
    edicion: (req, res) => {
        res.render('./products/edicionProductos.ejs');
    },
    list: (req, res) => {
        res.render('../views/products/productos.ejs', {'products': productJSON});
    },
    detalle: (req, res) => {

        let aux = req.params.id;

        res.render('../views/products/detalle.ejs', {'products': productJSON} );
    },
    carrito: (req, res) => {
        res.render('../views/products/carrito.ejs', {'products': productJSON});
    }
}
module.exports = productosController;