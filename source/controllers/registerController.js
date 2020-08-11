const registerController = {
    register: (req, res) => {
        res.render('./users/register.ejs');
    }
};

module.exports = registerController;