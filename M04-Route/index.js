const bodyParser = require('body-parser')
const expr = require('express')
const server = expr()

const logger = require('morgan')

server.use(logger('dev'))

server.use(expr.static(__dirname + '/public'))

server.get('/api/:username/:email', function(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send(req.params)
})

const data = bodyParser.urlencoded({extended: false})
expr.post('/api/data', data, function(req, res) {
    res.send(req.body)
})

server.listen(4000, function () {
    console.log('Server is running')
})