//----Express----
const express = require('express');
const app = express();
const auth = require('./middlewares/auth');

//crear funcion de express para utilizar carpeta public para archivos estaticos
app.use(express.static(__dirname + "/public"));

//----Session----
const session = require('express-session');
app.set('view engine','ejs');
app.use(session({
    secret: "Secret", 
    resave: true,
    saveUninitialized: true
}));
app.use(auth);

//----Method----
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


//----Rutas----
const routeHome = require('./routes/home_route.js');
const routeProducts = require('./routes/productos_route.js');
const routeUser = require('./routes/user_route');
const route404 = require('./routes/404_route.js');

app.use(express.urlencoded({extended: false}));
app.use(express.json());



//crear ruta '/'
app.use('/', routeHome);

//crear ruta '/list', '/register' '/login' '/search' '/user'
app.use('/users', routeUser);

//crear ruta '/productos', '/carrito'
app.use('/products', routeProducts);

//crear ruta de _inexistente_
app.get('*', route404);

//----Configuracion de puerto y msje de inicio----
app.listen(3000, ()  => {console.log( "\033[2J' ------------------------------------------------------\n | Servidor escuchando en el puerto 3000.             | \n ------------------------------------------------------")});