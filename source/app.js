const express = require('express');
const app = express();

const rutaHome = require('./routes/home.js');
const rutaContacto = require("./routes/contacto.js");
const rutaAcercaDe = require("./routes/acercaDe.js");
let rutaCarrito = require('./routes/carrito.js');
let rutaDetalle = require('./routes/detalle.js');

app.set('view engine','ejs');


//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static("public"));

//crear ruta '/'
app.use('/', rutaHome);

//crear ruta '/contacto'
app.use('/contacto', rutaContacto);

//crear ruta '/acercaDe (Empresa)'
app.use('/acercaDe', rutaAcercaDe);




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

//crear ruta '/login' 
app.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/login.html');
});

//crear ruta '/register' 
app.get('/register', function(req, res){
    res.sendFile(__dirname + '/views/register.html');
});

//crear ruta de _inexistente_
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});



//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});