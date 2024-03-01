const Sequelize = require('sequelize');
const sequelize = require('../config/connection'); // Adjust the path as necessary

const Category = require('./Category'); // Remove function call
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations here
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
