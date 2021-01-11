const express = require('express');
const router = express.Router();


// @route GET API/AUTH
// @desc  Get loggged in user
// @access Private ( user is logged in)
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;