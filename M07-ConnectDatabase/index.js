const sql = require('mysql')
const app = expr()

const con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tugas-web"
})

con.connect(function(err) {
    if(err) {
        throw err
    }
})

con.query('SELECT 1 + 1 AS solution', function(err, result, fields) {
    if(err) {
        throw err
    }
    console.log('The solution is : ', result[0].solution)
})

con.end()

app.listen(3000)