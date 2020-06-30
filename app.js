//ejecutar express
const express = require('express');
const app = express();

//iniciar en 3000
app.listen(3000, ()  => {console.log('Servidor escuchando en el puerto 3000.')});

//crear ruta para raiz '/'
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
} )

//crear ruta '/productos'
app.get('/productos', function(req, res){
    res.sendFile(__dirname + '/views/productos.html');
} )

//crear ruta '/acerca-de'
app.get('/acerca-de', function(req, res){
    res.sendFile(__dirname + '/views/acerca-de.html');
} )

//crear ruta '/contacto'
app.get('/contacto', function(req, res){
    res.sendFile(__dirname + '/views/contacto.html');
} )

//crear ruta '/boom' 
app.get('/boom', function(req, res){
    res.sendFile(__dirname + '/views/boom.html');
} )

//crear ruta de _inexistente_
app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
} )
