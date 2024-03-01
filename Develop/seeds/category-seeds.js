const sequelize = require('../config/connection');
const { Category } = require('../models');

const seedCategories = async () => {
  await Category.bulkCreate([
    { category_name: 'Category 1' },
    { category_name: 'Category 2' },
    { category_name: 'Category 3' },
  ]);
};

const seedProducts = async () => {
  // Define and implement the seedProducts function
};

const seedTags = async () => {
  // Define and implement the seedTags function
};

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
