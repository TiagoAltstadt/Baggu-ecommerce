const userController = {
    register: (req, res) => {
        res.render('./users/register.ejs');
    },
    login: (req, res) => {
        res.render('./users/login.ejs');
    },
    search: (req, res) => {
        let busqueda = res.query;
        res.send(busqueda); 
    }
};

module.exports = userController;