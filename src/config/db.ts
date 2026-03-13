import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'movies_db',
  process.env.DATABASE_USERNAME || 'root',
  process.env.DATABASE_PASSWORD || 'SKZ@albed0123',
  {
    host: process.env.HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  }
);

export default sequelize;
