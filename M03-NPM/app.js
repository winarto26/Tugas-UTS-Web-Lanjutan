const expr = require('express')
const server = expr()

var logger = require('morgan')

server.use(logger('dev'))

server.use(expr.static(__dirname + '/public'))

server.listen(4000, function () {
    console.log('Server is running')
})