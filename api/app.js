const express = require('express');
const users = require('./routes/users.js');

const app = express();
const port = 8081;

app.use((req, res, next) => {
    console.log('\n=== Incoming Request ===');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Origin:', req.headers.origin);
    console.log('========================\n');

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
