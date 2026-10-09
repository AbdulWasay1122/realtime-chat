
const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})