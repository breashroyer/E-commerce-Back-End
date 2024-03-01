const Category = require('../models/Category');

const categoryController = {
  // Create a new category
  createCategory: async (req, res) => {
    try {
      // Extract category_name from the request body
      const { category_name } = req.body;

      // Check if category_name is provided
      if (!category_name) {
        return res.status(400).json({ error: 'Category name is required' });
      }

      // Create the category
      const category = await Category.create({ category_name });

      // Send success response
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Get all categories
  findAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get category by id
  findCategoryById: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a category
  updateCategory: async (req, res) => {
    try {
      const [affectedRows] = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      if (affectedRows > 0) {
        res.status(200).json({ message: 'Category updated' });
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a category
  deleteCategory: async (req, res) => {
    try {
      const deleted = await Category.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(200).json({ message: 'Category deleted' });
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = categoryController;
