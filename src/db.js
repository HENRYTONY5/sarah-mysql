import { createPool } from 'mysql2/promise' //conjuntoDeConexiones
import {
DB_HOST,
DB_PORT,
DB_DATABASE,
DB_USER,
DB_PASSWORD

} from './config.js'
export const pool = createPool ({

    host: DB_HOST,
    user:  DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
    })

//    

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test'
// });