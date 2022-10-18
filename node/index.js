const express = require("express")
const app = express()
const port = 3000
const config = {
    host: 'desafio-mysql',
    user: 'root',
    password: 'edutuca',
    database: 'nodedb'
};

const mysql = require("mysql");


app.get('/teste',(req,res)=>{
    res.send("<h1>Eduardo</h1>")
})

app.get('/mysql',(req,res)=>{
const connection = mysql.createConnection(config);
    connection.query('SELECT * FROM people', function (error, results, fields) {
        if (error)
            throw error;

        res.end('<h1>Full Cycle Rocks!</h1></br>' + JSON.stringify(results));
    });    
  
})


app.listen(port, ()=>{
    console.log("Rodando na porta " + port)
})
