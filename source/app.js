const express = require('express');
const app = express();

const session = require('express-session');

//-----Rutas-----
const rutaHome = require('./routes/home.js');
const rutaContacto = require("./routes/contacto.js");
const rutaAcercaDe = require("./routes/acercaDe.js");
const rutaCarrito = require('./routes/carrito.js');
const rutaDetalle = require('./routes/detalle.js');
const rutaCreacionProductos = require('./routes/creacionProductos.js');
const rutaEdicionProductos = require('./routes/edicionProductos.js');
const rutaProductos = require('./routes/productos.js');
const rutaUser = require('./routes/user');

app.set('view engine','ejs');
app.use(session({secret: "Secret"}));


//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static("public"));

//crear ruta '/'
app.use('/', rutaHome);

//crear ruta '/list', '/register' '/login' '/search'
app.use('/', rutaUser);

//crear ruta '/contacto'
app.use('/contacto', rutaContacto);

//crear ruta '/acercaDe (Empresa)'
app.use('/acercaDe', rutaAcercaDe);

//crear ruta '/creacionProductos'
app.use('/creacionProductos' , rutaCreacionProductos);

//crear ruta '/edicionProductos'
app.use('/edicionProductos' , rutaEdicionProductos);

//crear ruta '/productos'
app.use('/productos', rutaProductos);

//crear ruta '/carrito'
app.use('/carrito', rutaCarrito);

//crear ruta '/detalle'
app.use('/detalle', rutaDetalle)

//crear ruta de _inexistente_
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});



//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});