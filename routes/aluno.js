const express = require('express');
const router = express.Router();

let alunos = [{id: 0, nome: "DAVI"},
{id: 1, nome: "MARIA"},
{id: 2, nome:"DOLY"},
{id: 3, nome:"THOR"}]


router.get("/", (req, res, next) =>{
    console.log(req.body);

    let aluno = alunos[req.body.id]
    if (aluno){
        res.json(aluno);
    }else {
        next()
    };
})

router.get("/", (req, res) =>{
    console.log(req.query);

    let aluno = alunos[req.query.id]
    if (aluno){
        res.json(aluno);
    }else{
        res.send('aluno não encontrado');
    }
 })

 router.get("/all", (req, res, next)=>{
    res.json(JSON.stringify(alunos));
 });

 router.get("/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.send(aluno);
 });

 module.exports = router;