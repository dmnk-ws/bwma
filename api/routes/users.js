const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
    const users = require('../fixtures/users.json');

    setTimeout(() => {
        res.json(users);
    }, 3000);
});

module.exports = router;