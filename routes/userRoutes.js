const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', function (req, res) {
    res.send('Welcome to the user Routes');
});

router.get('/all', authMiddleware.verifyToken, userController.getAllUsers);

router.post('/login', userController.login);

// Add the signup route here
router.post('/signup', userController.signup);

router.get('/profile', authMiddleware.verifyToken, userController.getUserData);

module.exports = router;
