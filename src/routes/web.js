const express = require('express');
const router = express.Router();
const { getHomepage, getWelcomepage } = require('../controllers/homeController');

//khai báo routes
router.get('/', getHomepage);
router.get('/homepage', getWelcomepage);

module.exports = router;
