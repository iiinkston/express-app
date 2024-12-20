const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger])

app.get('/', (req, res) => {

    console.log(method, url, time)
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})

app.get('/api/items', logger, (req, res) => {
    res.send('A')
})

app.listen(5000, () => {
    console.log("server is listenning")
})