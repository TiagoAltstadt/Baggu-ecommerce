const fs = require('fs');
let aux = fs.readFileSync( './public/data/users.json' , {encoding: 'utf-8'});

let usersJSON = JSON.parse(aux);


const userController = {
    register: (req, res) => {
        res.render('./users/register.ejs');
    },
    login: (req, res) => {
        res.render('./users/login.ejs');
    },
    search: (req, res) => {
        let busqueda = req.query.search;

        let usersResults = [];

        for (let i=0; i<usersJSON.length; i++){
            if (usersJSON[i].name.includes(busqueda)){
                usersResults.push(usersJSON[i]);
            }
        }

        res.render('usersResults.ejs', {usersResults: usersResults});

    },
    create: function (req, res) {
        res.send();
    },
    list: (req, res) => {      

        res.render('./users/list.ejs', {'users': usersJSON});
    },
    user: (req, res) => {
        res.render('./users/user.ejs', {'users': usersJSON});
    }
};

module.exports = userController;