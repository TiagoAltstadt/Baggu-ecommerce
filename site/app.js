//----Express----
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const session = require('express-session');
const auth = require('./middlewares/auth');
const cookieParser = require('cookie-parser');

// Cors
const cors = require('cors');
app.use(cors()); // cross origin

// Motor de vistas
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

// Formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

// Sesiones y cookies
app.use(session({
    secret: 'secreto', 
    resave: false, //no guarda denuevo si no hay cambios
    saveUninitialized: true // guarda sesiones aunque no hayan datos
}));
app.use(cookieParser());
app.use(auth);



//----Rutas----
const routeHome = require('./routes/home_route');
const routeProducts = require('./routes/products_route');
const routeUser = require('./routes/user_route');
const route404 = require('./routes/404_route');
const apiProductsRouter = require('./routes/api/products');
const apiUsersRouter = require('./routes/api/users');

//crear ruta '/'
app.use('/', routeHome);

//crear ruta '/productos', '/carrito'
app.use('/products', routeProducts);
app.use('/api/products', apiProductsRouter); 

//crear ruta '/list', '/register' '/login' '/search' '/user'
app.use('/users' , routeUser);
app.use('/api/users', apiUsersRouter); 

//crear ruta de _inexistente_
app.get('*', route404);

//----Configuracion de puerto y msje de inicio----
app.listen(3001, ()  => {
    console.clear();
    console.log("------------------------------------------------------");
    console.log("| Servidor escuchando en el puerto 3001.             |");
    console.log("------------------------------------------------------");
});