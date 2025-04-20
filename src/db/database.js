import mysql from 'promise-mysql';
import config from './../config.js';

// Crear la conexión a la base de datos
const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
  });
  return connection;
};

export default getConnection;  // Exportamos la función para obtener la conexión
