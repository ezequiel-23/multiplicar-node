const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar2');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo creado: ${ archivo }`))
            //.then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            //.then(archivo => console.log('Archivo creado:', `${archivo}`.green))
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}