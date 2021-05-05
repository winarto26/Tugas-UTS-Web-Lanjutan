const fs = require('fs')

fs.open("file.txt", "w+", function(err, file) {
    if(err) throw err

    let data = "Read Write File"
    fs.writeFile(file, data, (err) => {
        if (err) throw err
        console.log("Saved")
    })

    fs.readFile(file, (err, data) => {
        if(err) throw err
        console.log(data.toString('utf8'))
    })
})