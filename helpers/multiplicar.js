const fs = require('fs');
let data = "";
const colors = require('colors');
const crearArchivo = async(base = 5, listar=false , limite)=>{


    try {

        for (let i = 1; i <= limite; i++) {

            data +=`${base} * ${i} = ${base * i} \n`;
        }


        if(listar){
                
            console.log('************************'.bgYellow)
            console.log('  Tabla de Multiplicar  '.bold)
            console.log('************************'.bgYellow)
            console.log(data.rainbow)
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, data) 
        return `Tabla - ${base}`;
        
    } catch (error) {

        throw error;
        
    }
   
}

module.exports = {
    crearArchivo
};