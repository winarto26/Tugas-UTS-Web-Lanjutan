const webServer = require('http')
const fs = require('fs')

webServer.createServer(function(req, res) {
    fs.read('index.html', (err, data) => {
        if (err) throw err

        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(3000)