const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    res.send('yo!')
    next()
})

app.get('/calculate', (req, res, next) => {
    res.send('Let\'s calculate, brah!')
    next()
})

app.get('/calculate/multiply', (req, res, next) => {
    res.send('Let\'s multiply, brah!')
    next()
})

app.get('/calculate/divide', (req, res, next) => {
    res.send('Let\'s divde, brah!')
    next()
})

app.get('/calculate/:id', (req, res, next) => {
    let id = req.params.id
    res.send(id)
    next()
})

app.get('/calculate/:id/:secondId', (req, res, next) => {
    let secondId = req.params.secondId
    let id = req.params.id
    let total = id / secondId
    console.log(total)
    res.send('Answer ' + total)
    next()
})

app.get('/calculate/multiply/:id', (req, res, next) => {
    let id = req.params.id
    res.send(id)
    next()
})

app.get('/calculate/multiply/:id/:secondId', (req, res, next) => {
    let secondId = req.params.secondId
    let id = req.params.id
    let total = id * secondId
    console.log(total)
    res.send('Answer ' + total)
    next()
})

app.get('/calculate/divide/:id', (req, res, next) => {
    let id = req.params.id
    res.send(id)
    next()
})

app.get('/calculate/divide/:id/:secondId', (req, res, next) => {
    let secondId = req.params.secondId
    let id = req.params.id
    let total = id / secondId
    console.log(total)
    res.send('Answer ' + total)
    next()
})

app.listen(port)