const express = require('express');
const app = express();

const session = require('express-session');

//-----Rutas-----
const rutaHome = require('./routes/home_route.js');
const rutaContacto = require("./routes/contacto_route.js");
const rutaAcercaDe = require("./routes/acercaDe_route.js");
const rutaCarrito = require('./routes/carrito_route.js');
const rutaDetalle = require('./routes/detalle_route.js');
const rutaCreacionProductos = require('./routes/creacionProductos_route.js');
const rutaEdicionProductos = require('./routes/edicionProductos_route.js');
const rutaProductos = require('./routes/productos_route.js');
const rutaUser = require('./routes/user_route');
const ruta404 = require('./routes/404_route.js')

app.set('view engine','ejs');
app.use(session({secret: "Secret"}));


//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static("public"));

//crear ruta '/'
app.use('/', rutaHome);

//crear ruta '/list', '/register' '/login' '/search' '/user'
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
app.get('*', ruta404);



//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});