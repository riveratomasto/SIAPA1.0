const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection) => {
    if(err)
    {        
        if (err.code === 'PROTOCOL_CONNECTION_LOST')
        {
            console.error('DataBase coneccion Perdida');
        }
        if (err.code === 'ER_CON_COUNT_ERROR')
        {
            console.error('DataBase Tiene muchas conecciones');
        }
        if (err.code === 'ECONNREFUSED')




        
        {
            console.error('DataBase CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB connection OK xD');
    // console.log(pool);
    return;
});

//-> Promesa Pool Query
pool.query = promisify(pool.query);

module.exports = pool;