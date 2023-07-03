// userRoutes.js

const express = require('express');
const router = express.Router();
const {
  logout,
  ensureAuthenticated,
  getUser,
  login,
  signup,
} = require('../controllers/userController');

// Define the GET /getUser route
router.get('/getUser', ensureAuthenticated, getUser);

// API for Email Login
router.post('/login', login);

// API for Email Signup
router.post('/signup', signup);

// API for Email LogOut
router.post('/logout', ensureAuthenticated, logout);

module.exports = router;
