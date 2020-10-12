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
            let productEdit = db.Products.findByPk(req.params.id);
            let categoriesEdit = db.Categories.findAll();
            let brandsEdit = db.Brands.findAll();
            let imagesEdit = db.Images.findAll();

            Promise.all([productEdit, categoriesEdit, brandsEdit, imagesEdit])
                .then(function([products, categories, brands, images]){
                    res.render("products/edit_products", {products, categories, brands, images});
                })
        },

    update: (req, res, next) => {
        db.Products.update({
                //image: req.files[0].image, //no funciona que viaje imagen a base de datos//
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                brand_id: req.body.brand,
                category_id: req.body.category
        }, {
            where: {
                id: req.params.id }
        });
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
            db.Products.destroy({
                where:{
                    id: req.params.id
                }
            })
    
            res.redirect('/products');
        }
}

//----Exports----
module.exports = productsController;