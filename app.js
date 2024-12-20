const express = require('express')
const app = express()

let { people } = require('./data')
// const logger = require('./logger')
// const authorize = require('./authorize')

app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
    // console.log(method, url, time)
    // res.send('Home')
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ sucess: false, msg: 'please provide name value' })
    }
    res.status(201).send('success')
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
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