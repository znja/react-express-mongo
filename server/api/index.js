const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const userApi = require('./users/usersRoute');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.use('/users', userApi);

module.exports = router;
