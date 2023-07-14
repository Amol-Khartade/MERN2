// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// const {
//   logout,
//   ensureAuthenticated,
//   getUser,
//   login,
//   signup,
// } = require('../controllers/userController');

// Define the GET /getUser route
// router.get('/getUser', ensureAuthenticated, getUser);

// API for Email Login
router.post('/login', userController.login);

// API for Email Signup
router.post('/signup', userController.signup);

// API for Email LogOut
router.post('/logout', userController.ensureAuthenticated, userController.logout);

module.exports = router;
