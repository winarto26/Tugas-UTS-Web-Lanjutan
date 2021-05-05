const fs = require('fs')

fs.rename("scFile.json", "mwFile.json", (err) => {
    if(err) {
        return console.log(err)
    }

    console.log("Changed")
})