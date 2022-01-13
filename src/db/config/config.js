require('dotenv/config');

module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'HW_tasks',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
  },
  test: {},
  production: {},
};
