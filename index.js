const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')))
// app.use("/meusitte", express.static(path.join(__dirname, 'client')))


const port = 5000;
app.listen(port, () =>{
    console.log(`Server Running on Port:${port}`);
})
