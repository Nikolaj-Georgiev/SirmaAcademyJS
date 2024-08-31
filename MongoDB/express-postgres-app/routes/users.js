import express from 'express';
const router = express.Router();
import { User } from '../models/User.js';

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(500).send('All fields required')
  }
  try {
    const user = await User.create({ name, email, age });
    res.json(user);
  } catch (error) {
    res.status(500).send('Error while saving new user' + error.message);

  }

});

router.put('/', async (req, res) => {

});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(404).json('ID is required')
  }

  try {
    const result = await User.destroy({
      where: {
        id: id
      }
    });

    if (result === 0) {
      return res.status(404).json('User not found');
    }
    res.status(200).json('User deleted ');
  } catch (error) {
    res.status(500).json('Error deleting user: ' + error.message);
  }

});

router.delete('/delete/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    await user.destroy();
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting user: ' + error.message });
  }
});

export default router;