//----File System----
const fs = require('fs');
//----Path------
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
                res.render('products/products', {products, brands});
                    
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
                    res.render('products/create_product', {categories, brands});
                    
                })
            })
        },

    store: (req,res, next) => {
        let photoDefault = '../public/img/logos/Nuevo Logo.png'; // Como hacer para que un producto pueda cargarse
        if (req.files[0].filename != undefined) {                // sin imagen y que use una imagen default, tambien
            photoDefault = req.files[0].filename;                // como hacer para que multer respete nombre de 
        }                                                        // imagen original y no le cree una nueva

        db.Products.create({
                image: photoDefault,
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

            Promise.all([productEdit, categoriesEdit, brandsEdit])
                .then(function([products, categories, brands]){
                    res.render("products/edit_products", {products, categories, brands});
                })
        },

    update: (req, res, next) => {
        db.Products.update({
                image: req.files[0].filename,
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
                            res.render("products/detail_products", { products, brands });
                        
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