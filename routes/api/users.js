const express = require('express');
const router = express.Router();


// @route GET api/users
// @route Test route
// @route Public

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
