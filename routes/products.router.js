const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filtrando');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = service.findOne(id);

    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.json(response);
});

module.exports = router;
