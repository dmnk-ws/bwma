const express = require('express');
const users = require('./routes/users.js');
const api = require('./routes/api.js');

const app = express();
const port = 8081;
const allowedOrigins = ['http://127.0.0.1:8000', 'http://localhost:5173'];

app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', users);

app.use('/api', api);

app.listen(port, () => {
    console.log(`Express app running at http://127.0.0.1:${port}/`);
});
