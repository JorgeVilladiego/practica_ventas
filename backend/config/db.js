import mysql from 'mysql2';
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sena',
    database: 'clientes_db',
    port: 3307
});
db.connect((err) => {
    if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
    }
    console.log('Conexión a la base de datos establecida.');
});