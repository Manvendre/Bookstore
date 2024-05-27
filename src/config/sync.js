const sequelize = require('./database');
const User = require('../models/User');
const Book = require('../models/Book');

const sync = async () => {
  await sequelize.sync({ force: true });
  console.log("Database synced");
};

sync();
