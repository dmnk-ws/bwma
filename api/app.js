const express = require('express');
const users = require('./routes/users.js');

const app = express();
const port = 8081;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', users);

app.listen(port, () => {
    console.log(`Express app running at http://127.0.0.1:${port}/`);
});
