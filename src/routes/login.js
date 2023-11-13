const express = require('express');
const login = express.Router();
const bcrypt = require('bcrypt');
const logs = require('../models/loginModel');
const mongoose = require('mongoose');

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    res.status(400).json({ success: false, error: true, message: 'Validation error', details: err.message });
  } else if (err instanceof mongoose.Error) {
    res.status(500).json({ success: false, error: true, message: 'MongoDB error', details: err.message });
  } else {
    res.status(500).json({ success: false, error: true, message: 'Something went wrong', details: err.message });
  }
  console.log(err);
};

login.use(errorHandler);

login.post('/log', async (req, res, next) => {
  try {
    // Basic validation
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ success: false, error: true, message: 'Username and password are required' });
    }

    // Basic validation for password length
    if (req.body.password.length < 8) {
      return res.status(400).json({ success: false, error: true, message: 'Password must be at least 8 characters long' });
    }

    const oldUser = await logs.findOne({ username: req.body.username });
    if (oldUser) {
      return res.status(400).json({ success: false, error: true, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const result = await logs.create({
      username: req.body.username,
      password: hashedPassword,
      customerName: req.body.customerName,
      gender: req.body.gender,
      preferredCategory: req.body.preferredCategory,
    });

    if (result) {
      res.status(201).json({ success: true, error: false, message: 'Registration completed', details: result });
    }
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = login;