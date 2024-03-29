const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust this path as needed

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Category', // Adjust the model name to match the class name
});

module.exports = Category;

