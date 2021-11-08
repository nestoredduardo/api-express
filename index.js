const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al server');
});

app.get('/users', (req, res) => {
  res.json({
    usersList: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ],
  });
});

app.get('/products', (req, res) => {
  res.json({
    id: 1,
    name: 'Auriculares',
    price: 2000,
  });
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
