const { Router } = require('express');

const router = Router();
router.get('/', [], (req, res) => {
  res.json({ 
    result: "Hola Mundo"
  });
});

module.exports = router;