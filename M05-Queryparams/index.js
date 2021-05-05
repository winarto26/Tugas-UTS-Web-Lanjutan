const bodyParser = require('body-parser')
const expr = require('express')
const server = expr()

const logger = require('morgan')

server.use(logger('dev'))

server.get('/api/:username/:email', function(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send(req.params)
})

server.get('/api/search', function(req, res, next) {
    const name = req.query.name
    console.log('username = ${name}')
    const email = req.query.mail
    console.log('email = ${email}')
    res.send(email)
})

server.listen(4000, function () {
    console.log('Server is running')
})