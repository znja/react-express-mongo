const router = require('express').Router();
const List = require('./listModel');
const isEmpty = require('lodash').isEmpty;

router.get('/', (req, res) => {
  List.find()
    .then(list => res.json(list))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  if (isEmpty(req.body)) res.sendStatus(400);
  List.create(req.body)
    .then(item => res.status(200).json(item))
    .catch(err => res.status(400).json(err));
});


router.put('/:itemId', (req, res) => {
  if (isEmpty(req.body)) res.sendStatus(400);
  const id = req.params.itemId;
  List.findByIdAndUpdate(id, req.body, {new: true})
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:itemId', (req, res) => {
  const id = req.params.itemId;
  List.findByIdAndRemove(id)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
