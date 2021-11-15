const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  res.json({
    usersList: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
    ],
  });
});

module.exports = router;
