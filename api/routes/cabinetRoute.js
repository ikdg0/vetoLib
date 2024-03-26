const express = require('express');
const router = express.Router();

const cabinetController = require('../controllers/cabinetController');
//const { authenticator } = require('../middlewares/middlewareCorrAdmin');

// Routes pour la table commentaire
router.get('/getAll', /* authenticator,*/ cabinetController.getAllCommentaires);
router.get('/get/:id', /* authenticator,*/ cabinetController.getCommentaire);
router.post('/add', /* authenticator,*/ cabinetController.addCommentaire);
router.put('/edit/:id',/* authenticator,*/ cabinetController.EditCommentaire);
router.delete('/delete/:id', /* authenticator,*/ cabinetController.DeleteCommentaire); 

module.exports = router;