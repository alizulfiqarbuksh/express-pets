const Pet = require("../models/pet");

const express = require('express');

const router = express.Router();


//post + /pets/
router.post('/', async (req, res) => {
  try {

    const pet = await Pet.create(req.body);
    res.status(201).json({pet});
    
  } catch (error) {
    res.status(500).json({error: 'failed to create pet'});
  }
})


module.exports = router;