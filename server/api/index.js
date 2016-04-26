const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const userApi = require('./users/usersRoute');
const listApi = require('./list/listRoute');


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.use('/users', userApi);
router.use('/list', listApi);

module.exports = router;
