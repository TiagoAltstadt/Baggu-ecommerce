//----File System----
const fs = require('fs');
//----Phat------
const path = require("path");
//----Data Base----
let db = require('../../database/models');

const productsController = {
    list: function(req, res){
        db.Products.findAll()
            .then(function(products){
                db.Brands.findAll()
                .then(function(brands){
                    for (let i=0; i<products.length; i++){
                        products[i].setDataValue('endpoint', '/api/products/'+products[i].id ) 
                    }
                    let respuesta = {
                        meta: {
                            status: 200,
                            total: products.length,
                            
                            url: '/api/products'
                        },
                        data: {products, brands}
                    };
                res.json(respuesta);
                    
                })
            })
    },
    find: function(req, res){
        db.Products.findByPk(req.params.id)
        .then(function(products){
            console.log(products);
            db.Brands.findAll()
            .then(function(brands){
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: '/api/products'
                    },
                    data: {products, brands}
                };
                res.json(respuesta);
            })
        })
    }
}

module.exports = productsController;