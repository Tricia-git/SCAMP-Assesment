// //const mysql = require('mysql');
// //const express = require('express');
// // //const session = require('express-session');
// // const bodyParser = require('body-parser');
// // const path = require('path');
// // const connection =mysql.createConnection({
// //     host:'localhost',
// //     user: 'root',
// //     password: 'password',
// //     database: 'shopmartLogin'
// // });
// // // handling http request
// // const app = express();
// // app.use(session({
// //     secret:'secret',
// //     resave: true,
// //     saveUninitialized: true
// // }));
// // app.use('/public',express.static(path.join(__dirname,'static')));
// // app.use(bodyParser.urlencoded({extendend:false}));
// // app.use(bodyParser.json());
// // // to display login file to client
// // app.get('/',(request,response)=>{
// // response.sendFile(path.join(__dirname,'static','index.html'));
// // });
// // app.listen(3000);

// const express =require('express')
// const app = express()
// app.use(express.json())
// const users = []
// // To create Users
// app.get('/users',(req, res)=>{
//     res.json(users)
   
// });

// app.post('/users',(req,res)=>{
//  const users = { name: req.body.name, password: req.body.password }
// users.push(user)
// res.status(201).send()
// });

// app.listen(3000);



const express    = require("express");
const login = require('./routes/loginroutes');
const bodyParser = require('body-parser');
const app = express();
// to create the home page route
app.get('/',(req,res)=>{
    res.send('Welcome to the home page\n')
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const router = express.Router();
// test route
router.get('/',(req, res)=>{
    res.json({message:'Welcome to our upload Module'});
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
app.listen(4000);