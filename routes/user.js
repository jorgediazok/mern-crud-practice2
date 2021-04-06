const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/userControllers');

router.post('/signup', UserControllers.signup);
router.post('/signin', UserControllers.signin);

module.exports = router;
