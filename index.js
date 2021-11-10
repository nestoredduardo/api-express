const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al server');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  res.json({
    usersList: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ],
  });
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Filtrando');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id: parseInt(id),
    name: 'Auriculares',
    price: 2000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId: categoryId,
    productId: productId,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
