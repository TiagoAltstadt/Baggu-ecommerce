
const homeController = {
    index: (req, res) => {
            res.render('index');
        },
    contact: (req, res) => {
            res.render('contact');
        },
    aboutUs: (req, res) => {
            res.render("aboutUs");
        }
};

//----Exports----
module.exports = homeController;