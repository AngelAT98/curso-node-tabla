const colors = require('colors/safe')
//const { argv } = require('process');
const { demandOption, options } = require('yargs');
const {creararchivo} = require ('./helpers/multiplicar')
const argv = require ('./config/yargs')


console.clear();

console.log(argv);
//console.log('base: yargs', argv.b);


//const [,,arg3 = 'base=5'] = process.argv;
//const [,base = 5] = arg3.split('=');


//const base = 5;
creararchivo  (argv.b, argv.l, argv.h)
         .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
         .catch(err => console.log(err));




//console.log(salida);