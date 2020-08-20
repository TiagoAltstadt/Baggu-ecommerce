const fs = require('fs');
let prueba = fs.readFileSync('./public/data/users.json', {encoding: 'utf-8'});

let pruebaJSON = JSON.parse(prueba);

console.log(pruebaJSON[2].user);