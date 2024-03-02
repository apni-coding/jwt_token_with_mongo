const express = require('express');
const userController = require('../controller/user.controller');
const joivalidation = require('../middleware/joiValidation');
const router = express.Router();
const jwtValidation = require('../middleware/jwtValidation')

router.post('/signup', joivalidation, userController.signup)
router.post('/signin', joivalidation, userController.signin)
router.get('/', userController.getallUser);
router.put('/update', jwtValidation, userController.updateUser);
router.delete('/delete', jwtValidation, userController.deleteuser);



module.exports = router;