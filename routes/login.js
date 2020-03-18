const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login');

/*  L O G I N   R O U T E  */
router.route('/').post(login);

module.exports = router;
