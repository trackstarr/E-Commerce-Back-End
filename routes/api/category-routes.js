const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: Product, // Include associated products
  })
    .then(category => res.json(category))
    .catch(err => res.status(500).json(err));
});


router.post('/', (req, res) => {
  Category.create(req.body)
    .then(newCategory => res.json(newCategory))
    .catch(err => res.status(500).json(err));
});


router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(updatedCategory => res.json(updatedCategory))
    .catch(err => res.status(500).json(err));
});


router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.json({ message: 'Category deleted' }))
    .catch(err => res.status(500).json(err));
});


module.exports = router;
