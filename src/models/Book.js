const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DECIMAL, allowNull: false },
  sellerId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' }}
});

User.hasMany(Book, { foreignKey: 'sellerId' });
Book.belongsTo(User, { foreignKey: 'sellerId' });

module.exports = Book;
