const colors = require('colors/safe')
const colors2 = require('colors')

const fs = require('fs');
const creararchivo = async (base, listar = false, hasta) => {
try {
    //se pueden hacer promesas asi  //return new Promise((resolve, reject) => {
        if(listar){
            console.log('=================='.green);
            console.log('Tabla del'.bgBlue, colors2.bgRed( base));
            console.log('=================='.green);
        }
        
        let salida = '';
        let consola = '';            
        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${colors.rainbow('=')} ${base * i}\n`;
        }
        if(listar){
            console.log( consola);
        }
       
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt`;


    //})
} catch (error) {
    throw error;
}

   
}

module.exports = {
    creararchivo
}