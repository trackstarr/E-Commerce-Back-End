const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include:[
        {
          model:Product,
          through:ProductTag,
        }
      ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    if (!tagData) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((newTag) => res.status(201).json(newTag))
    .catch((err) => res.status(400).json(err));
});


router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedTag) => {
      if (updatedTag[0] === 0) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag updated' });
    })
    .catch((err) => res.status(400).json(err));
});


router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRows) => {
      if (deletedRows === 0) {
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag deleted' });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
