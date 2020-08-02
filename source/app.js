const express = require('express');
const app = express();

let rutaHome = require('./routes/home.js');
let rutaCarrito = require('./routes/carrito.js');
let rutaDetalle = require('./routes/detalle.js');

//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static("public"));

//crear ruta para raiz '/'
app.use('/', rutaHome);

//crear ruta '/productos'
app.get('/productos', function(req, res){
    res.sendFile(__dirname + '/views/productos.html');
});

//crear ruta '/acerca-de'
app.get('/acerca-de', function(req, res){
    res.sendFile(__dirname + '/views/acerca-de.html');
});

//crear ruta '/contacto'
app.get('/contacto', function(req, res){
    res.sendFile(__dirname + '/views/contacto.html');
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

/*ruta header, luego borrar*/
app.get('/header', function(req, res){
    res.sendFile(__dirname + '/views/header.html');
});

/*ruta footer, luego borrar*/
app.get('/footer', function(req, res){
    res.sendFile(__dirname + '/views/footer.html');
});

//crear ruta de _inexistente_
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});


//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});