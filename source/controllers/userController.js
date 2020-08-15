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
            {id: 1, name: "Percy"},
            {id: 2, name: "Anabeth"},
            {id: 3, name: "Jason"}
        ]

        let usersResults = [];

        for (let i=0; i<users.length; i++){
            if (users[i].name.includes(busqueda)){
                usersResults.push(users[i]);
            }
        }

        res.render('usersResults', {usersResults: usersResults});

    },
    list: (req, res) => {
        let users = [
            {id: 1, name: "Percy"},
            {id: 2, name: "Anabeth"},
            {id: 3, name: "Jason"}
        ]

        res.render('list', {'users': users});
    }
};

module.exports = userController;