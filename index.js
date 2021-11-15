const express = require('express');
const routerAPI = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

routerAPI(app);

app.get('/', (req, res) => {
  res.send('Bienvenido al server');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
