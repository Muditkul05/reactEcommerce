import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MySQL@2026',
    database: 'ecommerce_db',      
    waitForConnections: true,        
    connectionLimit: 10,
    queueLimit: 0
});


const db = pool.promise();
export default db