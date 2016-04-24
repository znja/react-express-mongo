const express = require('express');
const router = express.Router();
const User = require('./userModel');
const isEmpty = require('lodash').isEmpty;

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
});

router.get('/:userId', (req, res) => {
  const id = req.params.userId;
  User.findById(id)
  .then((user) => {
    if (user.length === 0) return res.sendStatus(404);
    return res.json(user);
  })
  .catch(err => res.sendStatus(err));
});

router.post('/', (req, res) => {
  if (isEmpty(req.body)) res.sendStatus(400);
  return User.create(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});

router.put('/:userId', (req, res) => {
  if (isEmpty(req.body)) res.sendStatus(400);
  const id = req.params.userId;
  User.findByIdAndUpdate(id, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:userId', (req, res) => {
  const id = req.params.userId;
  User.findByIdAndRemove(id)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
