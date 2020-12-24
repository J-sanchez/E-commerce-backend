const { Category } = require('../models');

const CategoryData = [
  {
    Category_name: 'Shirts',
  },
  {
    Category_name: 'Shorts',
  },
  {
    Category_name: 'Music',
  },
  {
    Category_name: 'Hats',
  },
  {
    Category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(CategoryData);

module.exports = seedCategories;
