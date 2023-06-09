// userController.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User } = require('../models/user');

// Controller function to handle user authentication
exports.getUser = (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // User is authenticated, return the user data
    res.json(req.user);
  } else {
    // User is not authenticated, return an error or empty response
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// API for Email Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      // User does not exist
      return res.status(404).json({ message: 'User does not exist' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.json(user);
    } else {
      // Incorrect password
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// API for Email Signup
exports.signup = async (req, res) => {
  const { firstName, lastName, contact, dob, email, password, con_password } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // User already exists
      return res.status(409).json({ message: 'User already exists' });
    } else {
      // Create a new user and save it in the database
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
      const newUser = new User({
        id: mongoose.Types.ObjectId().toString(), // Generate a unique ID
        firstName,
        lastName,
        contact,
        dob,
        email,
        password: hashedPassword,
        con_password: hashedPassword,
      });
      await newUser.save();
      return res.status(200).json({ message: 'Success' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.logout = (req, res) => {
  req.logout(); // Passport's logout method to remove user session
  res.status(200).json({ message: 'Logout successful' });
};

// Middleware function to ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // User is authenticated, proceed to the next middleware or route handler
    return next();
  }

  // User is not authenticated, return an error response
  res.status(401).json({ message: 'Unauthorized' });
};
