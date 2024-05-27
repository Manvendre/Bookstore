const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookstore_db', 'postgres', '2083', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
