const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Express app running at http://127.0.0.1:${port}/`)
})
