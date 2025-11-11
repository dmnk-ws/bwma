const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
    const users = require('../fixtures/users.json');

    res.json(users);
});

module.exports = router;