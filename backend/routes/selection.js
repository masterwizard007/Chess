const express = require('express');
const router = express.Router();
const Selection = require('../mongoose/models/selection');

router.post('/', async (req, res) => {
  try{
    const selection = new Selection({itemSelected: req.body.selection});

    await selection.save();
    res.status(201).json(selection);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

module.exports = router;

