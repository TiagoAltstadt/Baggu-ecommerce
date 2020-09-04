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
    store: (req,res) => {
        const producto = {
            id: req.body.id,
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
            
          }
        const archivoProductos = fs.readFileSync('./public/data/products.json', { encoding: 'utf-8' })
        let productos
        if (archivoProductos == '') {
            productos = []
        } else {
        productos = JSON.parse(archivoProductos)
        }
        productos.push(producto)
        const productosJSON = JSON.stringify(productos);
        fs.writeFileSync('./public/data/products.json', productosJSON);
        res.redirect('/products');

    },
    edit: (req, res) => {
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