

const homeController = {
    index: 
        function(req, res){
            res.render('index.ejs', { root: './views'});
        },
    contacto: 
        function(req, res){
            res.render('contacto.ejs', { root: "./views"});
        },
    acercaDe: 
        function(req, res){
            res.render("acercaDe.ejs", { roots: "./views"});
        }
};

module.exports = homeController;