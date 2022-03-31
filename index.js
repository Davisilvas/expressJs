const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const query = require('express/lib/middleware/query');

let alunos = [{id: 0, nome: "DAVI"},
{id: 1, nome: "MARIA"},
{id: 2, nome:"DOLY"},
{id: 3, nome:"THOR"}]


app.use(bodyParser.urlencoded())

app.get("/", (req, res) =>{
    res.send("Hello World")
})

app.get("/alunos", (req, res) =>{
    res.json(JSON.stringify(alunos))

})

app.get("/aluno", (req, res) =>{
    console.log(req.body);
    console.log(req.query)
    let aluno = alunos[req.query.id]
    res.json(aluno);
 })

// app.get("/aluno", (req, res) =>{
//    console.log(req.body);
//    let aluno = alunos[req.body.id]
//    res.json(aluno);
// })

// app.get("/aluno/:id", (req, res) =>{
//     console.log(req.params.id);
//     let aluno = alunos[req.params.id]
//     res.json(aluno);
//  })

app.listen(3000, () => console.log("server rodando..."));
