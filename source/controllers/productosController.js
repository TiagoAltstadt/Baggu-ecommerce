const fs = require('fs');
let prueba = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});

let productJSON = JSON.parse(prueba);

const productosController = {
    list: (req, res) => {
        res.render('../views/products/productos.ejs', {'products': productJSON});
    },
    create: (req, res) => {
        res.render('./products/createProduct.ejs');
        
    },
    createPOST: (req,res) => {
        const data = JSON.parse(JSON.stringify(req.body));
        console.log(data);
        let datoJSON = JSON.stringify(data);
        fs.appendFileSync('./public/data/products.json', datoJSON);
        res.redirect('/products');
    },
    edicion: (req, res) => {
        res.render('./products/edicionProductos.ejs');
    },
    detail: (req, res) => {
        let data = req.params.id - 1;
        res.render('../views/products/detalle.ejs', {'products': productJSON, 'data': data} );
    },
    carrito: (req, res) => {
        res.render('../views/products/carrito.ejs', {'products': productJSON});
    }
}
module.exports = productosController;