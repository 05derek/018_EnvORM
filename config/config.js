require('dotenv').config();

const development = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
};

const production = {
  use_env_variable: 'POSTGRES_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
};

module.exports = {
  development,
  production,
};