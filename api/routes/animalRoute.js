const express = require('express');
const animalController = require('../controllers/animalController');

const router = express.Router();

// Route pour obtenir tous les animaux
router.get('/', animalController.getAllAnimals);

// Route pour obtenir un animal par son ID
router.get('/:id', animalController.getAnimalById);

// Route pour créer un nouvel animal
router.post('/', animalController.createAnimal);

// Route pour mettre à jour un animal existant
router.put('/:id', animalController.updateAnimal);

// Route pour supprimer un animal
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;