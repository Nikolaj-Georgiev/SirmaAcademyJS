const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  console.log(req.body);
  try {
    let newUser = new User({
      name,
      email,
      age
    });

    let user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Error while saving new user' + error.message);

  }

});

router.put('/', async (req, res) => {

});

router.delete('/:id', async (req, res) => {
  const id = req.params._id;
  const user = await User.findOne(id);
  if (user) {
    const result = await user.deleteOne();
    // await User.deleteOne(id)
    res.status(200).json('User deleted ' + result.deletedCount)
  } else {
    res.status(404).json('User not found')
  }

});

router.delete('/delete/:username', async (req, res) => {
  const name = req.params.name;
  const deleted = await User.deleteOne(name);
  if (deleted.deletedCount > 0) {
    res.status(200).json({ msg: 'User deleted ' + deleted.deletedCount })
  } else {
    res.status(404).json({ msg: 'User not found' })
  }

});

module.exports = router;