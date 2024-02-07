const sql = require('mysql2');
const env = require('dotenv');

let conn = null;

//Configuro los parametros definidos en el file .env
env.config();

const MySQL = {
    getConection: (dbName)=>{
        if(conn === null){
            conn = sql.createPool({
                host: process.env.DDBBHOST,
                port: process.env.DDBBPORT,
                user: process.env.USER,
                password: process.env.DDBBPASS,
                database: dbName,
                waitForConnections: true,
                connectionLimit: 60,
                queueLimit: 0,
            })
        }
        return conn;
    }
}
module.exports = MySQL;