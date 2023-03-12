const express  = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(
    cors(
        {
            origin: 'http://localhost:3000',
            methods: "GET, POST, PUT, DELETE",
            credentials: true
        }
    )
)
app.use(session({
   secret: 'group_cooperation',
   resave: false,
   saveUninitialized: true,
    cookie: {secure: true}
}));
app.use(cookieParser());
app.use(bodyParser.json());
const envparser = require('./envParser.js');
const hostname = envparser.obj.hostname;
const port = envparser.obj.port;
const secretKey = envparser.obj.jwtSecretKey;
const expirationDate = envparser.obj.jwtExpirationDate;
require('../routes/userRoutes.js')(app);
//require('../routes/expenseRoutes.js')(app);
const db = require('../db/data-source.js');
const {authenticateJWT} = require("../auth/refreshToken");


app.use(authenticateJWT)

db.dataSource.initialize()
    .then(()=>console.log("Connection is established"))
    .catch((e)=>console.log(e))

app.get('/', (req, res)=>{
    res.send("hello world")
})


app.listen(port, hostname,()=>{
    console.log("Server is being listened")
});

exports.getKey = secretKey;
exports.getDate = expirationDate;
