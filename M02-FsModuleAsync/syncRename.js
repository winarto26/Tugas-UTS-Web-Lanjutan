const fs = require('fs')

try {
    fs.renameSync("mwFile.json", "mwbFile.json")

    console.log("Changed")
} catch(err) {
    console.error(err)
}