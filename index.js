const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')))
// app.use("/meusitte", express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) =>{
    // res.set('content-type', 'text/plain')
    res.type(".html");

    // res.type('.html') => 'text/html'
    // res.type('html') => 'text/html'
    // res.type('txt') => 'text/plain'
    // res.type('json') => 'application/json'
    // res.type('application/json') => 'application/json'
    // res.type('png') => 'image/png'


    res.send("<h1>hello world from GET</h1>");
})

const port = 5000;
app.listen(port, () =>{
    console.log(`Server Running on Port:${port}`);
})
