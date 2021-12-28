import Sequelize from 'sequelize';
import env from './env.config';

import { createNamespace } from 'cls-hooked';

export const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

const db = new Sequelize({
  dialect: env.DB_TYPE,
  logging: env.DB_LOG ? console.log : false,
  host: env.DB_HOSTNAME,
  username: env.DB_USERNAME,
  password: `${env.DB_PASSWORD}`,
  port: env.DB_PORT,
  database: env.DB_DATABASE,
  timezone: '+00:00',
  define: {
    timestamps: false
  }
});

export default db;

export function openConnection() {
  return db.authenticate();
}

export function closeConnection() {
  return db.close();
}
