const fs = require('fs');
const { Console } = require('console');
const { type } = require('os');

const productosController = {
    list: 
        function(req, res){
        
            //leo el json de productos y lo paso a la variable archivoProductos como objeto literal
            const archivoProductos = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});
            const productJSON = JSON.parse(archivoProductos);

            res.render('../views/products/productos.ejs', {'products': productJSON});

        },
    create: 
        function(req, res){
            res.render('./products/createProduct.ejs');
        },
    store: 
        function(req,res){

            //guardo todos los datos del formulario en la variable producto
            const producto = {
                id: req.body.id,
                image: req.body.image,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category
            }
            
            //leo el json de productos y lo paso a la variable archivoProductos
            const archivoProductos = fs.readFileSync('./public/data/products.json', { encoding: 'utf-8' });

            //defino productos y digo, si esta vacia, creala, si tiene algo, parsealo para poder trabajar con eso
            let productos;

            if (archivoProductos == '') {
                productos = []
            } else {
            productos = JSON.parse(archivoProductos);
            }

            //sea cual sea el output, le meto la nueva info que declare mas arriba en productos
            productos.push(producto);

            //lo vuelvo un string para guardarlo
            const productosJSON = JSON.stringify(productos);

            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync('./public/data/products.json', productosJSON);

            //redirecciono
            res.redirect('/products');

        },
    edit: 
        function(req, res){

            //leo el json de productos y lo paso a la variable archivoProductos como objeto literal
            const archivoProductos = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});
            const productJSON = JSON.parse(archivoProductos);

            let data = req.params.id - 1;

            res.render('./products/edicionProductos.ejs', {'products': productJSON, 'data': data});
        },
    update: 
        function(req, res){

            //guardo la id en una variable
            let idProducto = parseInt(req.params.id) + 1;

            //guardo todos los datos del formulario en la variable producto
            const producto = {
                id: req.params.id,
                image: req.body.image,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category
            }
            
            

            //leo el json de productos y lo paso a la variable archivoProductos como objeto literal
            const archivoProductos = fs.readFileSync('./public/data/products.json', { encoding: 'utf-8' });
            const productos = JSON.parse(archivoProductos);

            let updated = productos.map( function(modificado){
                if (modificado.id == idProducto){
                    let aux = modificado;
                    aux.id = producto.id;
                    aux.image = producto.image;
                    aux.description = producto.description;
                    aux.price = producto.price;
                    aux.stock = producto.stock;
                    aux.category = producto.category;

                    return producto;
                }
                else{
                    return modificado;
                }
            })

            // for(let i=1; i<productos.length; i++){
            //     if (productos[i].id == idProducto){

            //         productos[i].id = producto.id;
            //         productos[i].image = producto.image;
            //         productos[i].description = producto.description;
            //         productos[i].price = producto.price;
            //         productos[i].stock = producto.stock;
            //         productos[i].category = producto.category;

            //     }   
            // }

            //lo vuelvo un string para guardarlo
            const productosJSON = JSON.stringify(updated, null, " ");
    

            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync(__dirname + '/../public/data/products.json', productosJSON);
    
            //redirecciono
            res.redirect('/products');
        },
    detail: 
        function(req, res){
            //leo el json de productos y lo paso a la variable archivoProductos como objeto literal
            const archivoProductos = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});
            const productJSON = JSON.parse(archivoProductos);

            let data = req.params.id - 1;
            res.render('../views/products/detalle.ejs', {'products': productJSON, 'data': data} );
        },
    carrito:
        function(req, res){
            //leo el json de productos y lo paso a la variable archivoProductos como objeto literal
            const archivoProductos = fs.readFileSync( './public/data/products.json' , {encoding: 'utf-8'});
            const productJSON = JSON.parse(archivoProductos);

            res.render('../views/products/carrito.ejs', {'products': productJSON});
        },
        delete: function(req, res){

            
            res.redirect('/products');
        }
}
module.exports = productosController;