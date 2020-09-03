const express = require('express');
const app = express();

const session = require('express-session');

//-----Rutas-----
const rutaHome = require('./routes/home_route.js');
const rutaContacto = require("./routes/contacto_route.js");
const rutaAcercaDe = require("./routes/acercaDe_route.js");
const rutaCarrito = require('./routes/carrito_route.js');
const rutaProductos = require('./routes/productos_route.js');
const rutaUser = require('./routes/user_route');
const ruta404 = require('./routes/404_route.js');
const { json } = require('express');

app.set('view engine','ejs');
app.use(session({
    secret: "Secret", 
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


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

//crear ruta '/productos'
app.use('/products', rutaProductos);

//crear ruta '/carrito'
app.use('/carrito', rutaCarrito);

//crear ruta de _inexistente_
app.get('*', ruta404);



//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});