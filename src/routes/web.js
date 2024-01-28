const express = require('express');
const router = express.Router();

//khai báo routes
router.get('/', (req, res) => {
    res.send('Hello, world! This is website of quannbh and NLPDEV');
});

router.get('/homepage', (req, res) => {
    res.render('sample.ejs');
});

module.exports = router;
