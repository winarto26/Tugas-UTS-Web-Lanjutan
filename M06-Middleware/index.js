const bodyParser = require('body-parser')
const expr = require('express')
const server = expr()

const logger = require('morgan')

server.use(logger('dev'))

const middleWare = (req, res, next) => {
    if(req.params.name == 'wii') {
        console.log('Username found')
        next()
    } 
    else {
        const err = {
            status: 'error',
            data: {
                name: req.params.name
            }
        }
        next(err)
    }
}

server.get('/api/:username/:email', function(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send(req.params)
})

server.use((err, req, res, next) => {
    res.send(err)
})

server.listen(4000, function () {
    console.log('Server is running')
})