const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    let newUser = new User({
      name,
      email,
      age
    });

    let user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Error while saving new user');

  }

});

router.put('/', async (req, res) => {

});

router.delete('/', async (req, res) => {

});
