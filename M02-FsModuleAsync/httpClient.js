const webServer = require('http')

const options = {
    hostname : "www.bmw.co.id",
    port : 80,
    path : '/',
    method : 'GET',

    headers: {
        'Content-Type' : 'application/json'
    }
}

const req = webServer.request(options, function(response) {
    console.log(response.statusCode)
    console.log(response.statusMessage)
    console.log(response.headers)
})

req.on('error', function(e) {
    console.log('Error' + e.message)
})

req.end()