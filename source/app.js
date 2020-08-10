const express = require('express');
const app = express();

const rutaHome = require('./routes/home.js');
const rutaContacto = require("./routes/contacto.js");
const rutaAcercaDe = require("./routes/acercaDe.js");
let rutaCarrito = require('./routes/carrito.js');
let rutaDetalle = require('./routes/detalle.js');
const rutaLogin = require('./routes/login.js');
const rutaRegister = require('./routes/register.js');
const rutaCreacionProductos = require('./routes/creacionProductos.js');
const rutaEdicionProductos = require('./routes/edicionProductos.js');

app.set('view engine','ejs');


//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static("public"));

//crear ruta '/'
app.use('/', rutaHome);

//crear ruta '/contacto'
app.use('/contacto', rutaContacto);

//crear ruta '/acercaDe (Empresa)'
app.use('/acercaDe', rutaAcercaDe);

//crear ruta '/login' 
app.use('/login' , rutaLogin);

//crear ruta '/register' 
app.use('/register' , rutaRegister);

//crear ruta '/creacionProductos'
app.use('/creacionProductos' , rutaCreacionProductos);

//crear ruta '/edicionProductos'
app.use('/edicionProductos' , rutaEdicionProductos);

//crear ruta '/productos'
app.get('/productos', function(req, res){
    res.sendFile(__dirname + '/views/productos.html');
});

//crear ruta '/carrito'
app.use('/carrito', rutaCarrito);

//crear ruta '/detalle'
app.use('/detalle', rutaDetalle)

//crear ruta '/boom' 
app.get('/boom', function(req, res){
    res.sendFile(__dirname + '/views/boom.html');
});


//crear ruta de _inexistente_
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});



//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});