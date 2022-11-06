
const argv = require('yargs')
.option('b' ,{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra en consola la tabla'
})
.option('h',{
    alias: 'limite',
    type: 'number',
    default: 10,
    describe: 'Limite de la tabla'
})
.check((argv , options)=>{
    if(isNaN(argv.b)){
        throw 'La base debe ser Numero'
    }
    return true;
})

.argv;

module.exports = {
    argv
}