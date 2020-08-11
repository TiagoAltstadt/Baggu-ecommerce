const productosController = {
    creacion: (req, res) => {
        res.render('./products/creacionProductos.ejs');
    },
    edicion: (req, res) => {
        res.render('./products/edicionProductos.ejs');
    }
}
module.exports = productosController;