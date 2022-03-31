const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded())

app.get("/", (req, res) =>{
    res.send("Hello World")
})

app.get("/alunos", (req, res) =>{

    let alunos = [{id: 0, nome: "DAVI"},
    {id: 1, nome: "MARIA"},
    {id: 2, nome:"DOLY"},
    {id: 3, nome:"THOR"}]

    res.json(JSON.stringify(alunos))

})

app.listen(3000, () => console.log("server rodando..."));
