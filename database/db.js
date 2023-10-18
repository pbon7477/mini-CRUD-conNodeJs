const mysql = require('mysql');


const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'123456',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: ' +error);
        return
    }
    console.log('CONECTADO A LA BASE DE DATOS MySQL - crud_nodejs_db')
});

module.exports = conexion;