const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type:'number',
                demandOption: true,
                describe: 'Es la base de tabla de multiplicar'
            }) 
            .option('l', {
                alias: 'listar',
                type:'boolean',
                demandOption: true, 
                default: false,
                describe: 'Lista la tabla de multlipicar'
            }) 
            .option('h', {
                alias: 'hasta',
                type:'number',
                demandOption: 10, 
                describe: 'numero hasta dodne quires que llegue la tabla de multiplicar'
            }) 
            .check((argv, options)=>{
                if(isNaN(argv.b && argv.h)){
                    throw 'la base debe de ser un numero  y h debe de ser un numero';
                }
                return true;
                //console.log('yargs', argv)
            })     
            .argv;

module.exports = argv;