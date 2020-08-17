const userController = {
    register: (req, res) => {
        res.render('./users/register.ejs');
    },
    login: (req, res) => {
        res.render('./users/login.ejs');
    },
    search: (req, res) => {
        let busqueda = req.query.search;

        let users = [
            {id: 1, name: "percy"},
            {id: 2, name: "anabeth"},
            {id: 3, name: "jason"}
        ]

        let usersResults = [];

        for (let i=0; i<users.length; i++){
            if (users[i].name.includes(busqueda)){
                usersResults.push(users[i]);
            }
        }

        res.render('usersResults', {usersResults: usersResults});

    },
    create: function (req, res) {
        res.send();
    },
    list: (req, res) => {
        let users = [
            {id: 1, name: "percy"},
            {id: 2, name: "anabeth"},
            {id: 3, name: "jason"}
        ]

        res.render('list', {'users': users});
    }
};

module.exports = userController;