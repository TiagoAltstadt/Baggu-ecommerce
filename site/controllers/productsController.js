//----File System----
const fs = require('fs');
//----Path------
const path = require("path");
//----Data Base----
let db = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//------Se lee la base de datos products.json, se lo parcea para su utilizacion------
const datapath = path.join(__dirname, "/../data/products.json") ;
const productJSON = JSON.parse(fs.readFileSync(datapath, {encoding: 'utf-8'}));



const productsController = {
    list1: (req, res) => {
        db.Products.findAll({
            where: {category_id: 1
            }
        })
            .then(function(products){
                db.Brands.findAll()
                .then(function(brands){
                res.render('products/descartables', {products, brands});
                    
                })
            })
        },

    
    list2: (req, res) => {
        db.Products.findAll({
            where: {category_id: 2
            }
        })
            .then(function(products){
                db.Brands.findAll()
                .then(function(brands){
                res.render('products/papeleria', {products, brands});
                            
                })
            })
        },

        list3: (req, res) => {
            db.Products.findAll({
                where: {category_id: 3
                }
            })
                .then(function(products){
                    db.Brands.findAll()
                    .then(function(brands){
                    res.render('products/higiene', {products, brands});
                                
                    })
                })
            },

    search: (req, res) => {

        db.Products.findAll({where: {name: { [Op.like]: '%'+req.query.search+'%' }}})
            .then(function(products){
                db.Brands.findAll()
                    .then(function(brands){
                        res.render('products/higiene.ejs', {products, brands})
                    })
            })
            
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

        let newProduct = {
            image: "defaultProduct.jpg",
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            brand_id: req.body.brand,
            category_id: req.body.category
        }
        if (req.files.length){
            newProduct.image = req.files[0].filename;
        } 
        
        db.Products.create(newProduct);
            res.redirect('/');
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

        let updateProducts = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            brand_id: req.body.brand,
            category_id: req.body.category
        }
        if (req.files.length){
            updateProducts.avatar = req.files[0].filename;
        } 
        db.Products.update(updateProducts, {
            where: {
                id: req.params.id }
        });
            res.redirect('/');
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
    
            res.redirect('/');
        }
}

//----Exports----
module.exports = productsController;