const fs = require('fs');
let prueba = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});

let productJSON = JSON.parse(prueba);

const productosController = {
    create: (req, res) => {
        res.render('./products/createProduct.ejs');
    },
    createPOST: (req,res) => {
        console.log(req.body);
        console.log(req.body);
        res.redirect('/products');
    },
    edicion: (req, res) => {
        res.render('./products/edicionProductos.ejs');
    },
    list: (req, res) => {
        res.render('../views/products/productos.ejs', {'products': productJSON});
    },
    detalle: (req, res) => {

        res.render('../views/products/detalle.ejs', {'products': productJSON} );
    },
    carrito: (req, res) => {
        res.render('../views/products/carrito.ejs', {'products': productJSON});
    }
}
module.exports = productosController;