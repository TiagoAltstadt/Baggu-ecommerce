//----File System----
const fs = require('fs');
//----Phat------
const path = require("path");
//----Data Base----
let db = require('../../database/models');

const usersController = {
    list: function(req, res){
        db.Users.findAll()
            .then(function(users){
                for (let i=0; i<users.length; i++){
                    users[i].setDataValue('endpoint', '/api/users/'+users[i].id ) 
                }
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: { users }
                }
                res.json(respuesta);
                });
    },
    find: function(req, res){
        db.Users.findByPk(req.params.id)
        .then(function(users){
            console.log(users);
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/api/users',
                    
                },
                data: { users }
            };
            res.json(respuesta);
            
        })
    }
}

module.exports = usersController;