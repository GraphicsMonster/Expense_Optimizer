const express  = require('express');
const app = express()
const envparser = require('./envParser.js')
const hostname = envparser.obj.hostname
const port = envparser.obj.port


app.get('/', (req, res)=>{
    res.send("hello world")
})


app.listen(port, ()=>{
    console.log("Example app")
})