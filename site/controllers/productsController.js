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
                db.Brands.findAll()
                .then(function(brands){
                    db.Images.findAll()
                    .then(function(images){
                res.render('products/products', {products, brands, images});
                    })
                })
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
        db.Categories.findAll()
            .then(function(categories){
                db.Brands.findAll()
                .then(function(brands){
                    db.Images.findAll()
                    .then(function(images){
                    res.render('products/create_product', {categories, brands, images});
                    })
                })
            })
        },

    store: (req,res, next) => {
        db.Products.create({
                image: req.files[0].image, //no funciona que viaje imagen a base de datos//
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                brand_id: req.body.brand,
                category_id: req.body.category
        });
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
            db.Products.findByPk(req.params.id, 
               // {include: [{association: "categories"}, {association: "brands"}, {association: "images"}]}
            )
                .then(function(products){
                db.Brands.findAll()
                    .then(function(brands){
                    db.Images.findAll()
                        .then(function(images){
                            res.render("products/detail_products", { products, brands, images });
                        })
                    })
                })    
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