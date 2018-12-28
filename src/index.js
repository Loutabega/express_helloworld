const express = require('express')
const first_service = require('./services/first_service')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/one', (req, res) => {
    res.send(200, first_service.one(1))
})
app.get('/two', (req,res) => {
    res.send(200, first_service.two(1))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 