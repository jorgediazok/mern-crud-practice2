const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/userControllers');

router.post('/', UserControllers.signup);

module.exports = router;
