
const homeController = {
    index: (req, res) => {
        
            res.render('index', {user: req.session.user});
        },
    contact: (req, res) => {
            res.render('contact');
        },
    aboutUs: (req, res) => {
            res.render("aboutUs");
        },
    new: function (req, res){
        res.render('new');
    }
};

//----Exports----
module.exports = homeController;