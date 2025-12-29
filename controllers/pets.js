const Pet = require("../models/pet");

const express = require('express');

const router = express.Router();


//post + /pets/
router.post('/', async (req, res) => {
  try {

    const pet = await Pet.create(req.body);
    res.status(201).json({pet});
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'failed to create pet'});
  }
})

router.get('/', async (req, res) => {
  try {
    
    const pets = await Pet.find();
    res.status(200).json({pets});

  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'failed to get pets'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      res.status(404).json({error: 'pet not found'});
    } else {
      res.status(200).json({pet});
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'failed to find pet'});
  }
});

router.delete('/:id', async (req, res) => {
  try {

    const pet = await Pet.findByIdAndDelete(req.params.id);
    
    if(pet) {
      res.status(200).json({message: 'success!!'});
    }
    else {
      res.status(404).json({error: 'pet not found'});
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'failed to delete pet'});
  }
});

router.put('/:id', async (req, res) => {
  try {

    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(pet) {
      res.status(200).json({pet});
    }
    else {
      res.status(404).json({error: 'pet not found'});
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'failed to update pet'});
  }
});


module.exports = router;