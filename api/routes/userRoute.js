const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
//const middleware = require('../middlewares/middleware')

// mettre les routes de notre table celebrite:
router.get('/', userController.getAllUsers)
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router
