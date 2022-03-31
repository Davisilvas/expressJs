const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const query = require('express/lib/middleware/query');
const aluno = require("./routes/aluno");



app.use(bodyParser.urlencoded())

app.use ("/student", aluno)

app.get("/", (req, res) =>{
    res.send("Hello World")
})


app.listen(3000, () => console.log("server rodando..."));
