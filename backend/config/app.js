const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const envparser = require('./envParser.js');
const hostname = envparser.obj.hostname;
const port = envparser.obj.port;
require('../routes/userRoutes.js')(app);
//require('../routes/expenseRoutes.js')(app);


app.get('/', (req, res)=>{
    res.send("hello world")
})


app.listen(port, ()=>{
    console.log("Example app")
})