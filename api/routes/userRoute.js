const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

const middleware = require('../middlewares/middleware')

// mettre les routes de notre table celebrite:
router.get('/', middleware.authenticator, userController.getAllUsers)
router.post('/', userController.createUser);
router.get('/:id', middleware.authenticator, userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', middleware.authenticator, userController.deleteUser);

router.post('/auth/login', userController.login)

module.exports = router
