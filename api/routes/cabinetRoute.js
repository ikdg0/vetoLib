const express = require('express');
const router = express.Router();

const cabinetController = require('../controllers/cabinetController');
//const { authenticator } = require('../middlewares/middlewareCorrAdmin');

// Routes pour la table commentaire
router.get('/cabinet', /* authenticator,*/ cabinetController.getAllCabinets);
router.get('/cabinet/:id', /* authenticator,*/ cabinetController.getCabinet);
router.post('/cabinet', /* authenticator,*/ cabinetController.addCabinet);
router.put('/cabinet/:id',/* authenticator,*/ cabinetController.editCabinet);
router.delete('/cabinet/:id', /* authenticator,*/ cabinetController.deleteCabinet); 

module.exports = router;