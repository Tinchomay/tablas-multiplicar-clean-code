import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

//Para utilizarla vamos a pasar por la funcion yargs el process.argv para que atrape las variabkes
//El metodo sparseSync analiza las variables de forma sincrona y las devuelve en un objeto
export const yarg = yargs(process.argv)
//Podemos agregar opciones para cada uno de los parametros que planeamos recibir, aqui estamos indicando que al recibir -b
.option('b', {
    //Este sera su alias y su uso para cuando utilicemos --base
    alias: 'base',
    //Sera de tipo numero
    type:'number',
    //Es requerido
    demandOption: true,
    //Esta es una descripcion
    describe: 'Base de la tabla de multiplicacion'
})
.option('l', {
    alias: 'limit', 
    type: 'number',
    default: 10,
    describe: 'Limite de multiplicacion'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Mostrar tabla de multiplicacion'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'tabla-multiplicar',
    describe: 'Nombre del archivo'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'Destino del archivo'
})

//Utilizando check necesita un argumento que es una funcion que tiene dos parametros el primero contiene todos los argv y el segundo todas las opciones 
.check( (argv, options) => {
    const base = Number(argv.b);
    if(argv.b < 0) throw 'La base tiene que ser mayor a 0'
    if(isNaN(base)) throw 'La base tiene que ser un numero'
    return true
})
.parseSync()