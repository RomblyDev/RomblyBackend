import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

// TODO: ooooh dotenv this all please
const connection = await mysql.createConnection({
  host: process.env.databaseHost,
  port: process.env.databasePort,
  user: process.env.databaseUser,
  password: process.env.databasePassword,
  database: process.env.databaseName
});

const database = drizzle(connection);

export default database;