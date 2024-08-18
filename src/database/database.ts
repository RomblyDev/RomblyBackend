import { drizzle, type MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import * as schema from '../schema';

// TODO: ooooh dotenv this all please
const connection = await mysql.createConnection({
  host: process.env.databaseHost,
  port: process.env.databasePort,
  user: process.env.databaseUser,
  password: process.env.databasePassword,
  database: process.env.databaseName
});

const database: MySql2Database<typeof schema>  = drizzle(connection);

export default database;