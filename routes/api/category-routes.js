const router = require('express').Router();
const { Category, Product } = require('../../models');

// TODO The `/api/categories` endpoint

router.get('/', (req, res) => {
  // TODO find all categories
  Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'Category_id']    // be sure to include its associated Products
      }
    })
  .then(CategoryData => res.json(CategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // TODO find one Category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['Category_id']   // be sure to include its associated Products /:id
    }
  })
  .then(CategoryData => res.json(CategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // TODO create a new Category
  Category.create({
    Category_name: req.body.Category_name
  })
  .then(CategoryData => res.json(CategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // TODO update a Category by its `id` value
  Category.update(
    {
      Category_name: req.body.Category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(CategoryData => {
      if (!CategoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(CategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // TODO delete a Category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(CategoryData => {
      if (!CategoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(CategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

