const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject(`El valor introducido  ${ base } para la base no es numero`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido ${ limite } para el limite no es numero`);
        return;
    }
    let data = '';

    console.log('=========================================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('=========================================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base * i}\n`;
    }

    console.log(data);

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } para el limite no es numero`);
            return;
        }
        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejet(err)
            else
                resolve(`tablas/tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}