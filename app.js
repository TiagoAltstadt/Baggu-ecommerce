const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor Corriendo'));

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});