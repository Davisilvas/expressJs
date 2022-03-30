const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

// let consolemethod =  (req, res, next) =>{
//     console.log(req.method); 
//     next();
//     // next("Erro");
// }

let consoleBody =  (req, res, next) =>{
    console.log(req.body); 
    next();
    // next("Erro");
}

let hello =  (req, res) =>{
    // console.log(req);
    res.send("<h1> pega o server do pai </h1>")
}

app.use ("/", bodyParser.json());
app.use ("/", consoleBody)

app.get("/", hello)
app.post("/", hello)

app.listen(3000, () => console.log("server rodando..."));
