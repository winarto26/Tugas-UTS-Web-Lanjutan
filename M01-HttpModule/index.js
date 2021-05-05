const webServer = require('http')

webServer.createServer(function (req, res) {
    res.writeHead(200,{'Content-type': 'text/html'} )
    res.write("<H1>Modul HTTP Mobile and Web</H1>")
    res.end()
}).listen(3400)