const productosController = {
    creacion: (req, res) => {
        res.render('creacionProductos.ejs');
    },
    edicion: (req, res) => {
        res.render('edicionProductos.ejs');
    }
}
module.exports = productosController;