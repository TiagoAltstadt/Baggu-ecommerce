//----File System----
const fs = require('fs');
//----Phat------
const path = require("path");
//----Data Base----
let db = require('../database/models');


//------Se lee la base de datos products.json, se lo parcea para su utilizacion------
const datapath = path.join(__dirname, "/../data/products.json") ;
const productJSON = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}));



const productsController = {
    list: (req, res) => {
        db.Products.findAll()
            .then(function(products){
                res.render('products/products', {'products': products});
            })
        },
    search: (req, res) => {
        let result = {};  
        if(req.query.search){
            result = productJSON.filter(group => group.name.toLowerCase().includes(req.query.search.toLowerCase()));    
        };
        
        res.render("products/search", {result});
        },
    create: (req, res) => {
            res.render('products/create_product');
        },
    store: (req,res, next) => {

            //guardo todos los datos del formulario en la variable producto
            const productNew = {
                id: req.body.id,
                image: req.files[0].filename,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category
            }

            //leo el json de productos y lo paso a la variable archivoProductos
            const fileProduct = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });

            //defino productos y digo, si esta vacia, creala, si tiene algo, parsealo para poder trabajar con eso
            let product;

            if (fileProduct == '') {
                product = []
            } else {
                product = JSON.parse(fileProduct);
            }

            //sea cual sea el output, le meto la nueva info que declare mas arriba en product
            product.push(productNew);

            //lo vuelvo un string para guardarlo
            const JSONproduct = JSON.stringify(product, null, " ");

            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync('./data/products.json', JSONproduct);

            //redirecciono
            res.redirect('/products');
        },
    edit: (req, res) => {
            const editProduct = productJSON.find(editProduct => editProduct.id == req.params.id);

            res.render("products/edit_products", {"products": editProduct});
        },
    update: (req, res, next) => {

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
            const archivoProductos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });
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

            //lo vuelvo un string para guardarlo
            const productosJSON = JSON.stringify(updated, null, " ");
    
            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync('./data/products.json', productosJSON);
    
            //redirecciono
            res.redirect('/products');
        },
    detail: (req, res) => {
            const detailProduct = productJSON.find(detailProduct => detailProduct.id == req.params.id);
        
            res.render("products/detail_products", { "products": detailProduct });
        },
    cart: (req, res) => {
            res.render('../views/products/cart.ejs', {'products': productJSON});
        },
    delete: (req, res) => {
            let rows = productJSON;
            let updatedRows = rows.filter(oneRow => oneRow.id != req.params.id);
    
            let fileContents = JSON.stringify(updatedRows, null, " ");
            (fs.writeFileSync(path.join(__dirname, "/../data/products.json"), fileContents));
    
            res.redirect('/products');
        }
}

//----Exports----
module.exports = productsController;