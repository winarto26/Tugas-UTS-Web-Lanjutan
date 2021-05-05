const fs = require('fs')

fs.appendFile("file.txt", "Web Lanjutan", function(err) {
    if (err) throw err
    console.log("Saved")
})