const {argv} = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar');
var colors = require('colors');



console.clear();

crearArchivo(argv.b, argv.l , argv.h)
.then(nombreArchivo=>console.log('Archivo Creado '.rainbow , nombreArchivo.green))
.catch(err=>console.log(err))

