//----Express----
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const session = require('express-session');
const auth = require('./middlewares/auth');


// Motor de vistas
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

// Formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

// Sesiones 
app.use(session({
    secret: "Secret", 
    resave: true,
    saveUninitialized: true
}));
app.use(auth);




//----Rutas----
const routeHome = require('./routes/home_route');
const routeProducts = require('./routes/products_route');
const routeUser = require('./routes/user_route');
const route404 = require('./routes/404_route');

//crear ruta '/'
app.use('/', routeHome);

//crear ruta '/productos', '/carrito'
app.use('/products', routeProducts);

//crear ruta '/list', '/register' '/login' '/search' '/user'
app.use('/users' , routeUser);

//crear ruta de _inexistente_
app.get('*', route404);

//----Configuracion de puerto y msje de inicio----
app.listen(3000, ()  => {
    console.log("------------------------------------------------------");
    console.log("| Servidor escuchando en el puerto 3000.             |");
    console.log("------------------------------------------------------");
});