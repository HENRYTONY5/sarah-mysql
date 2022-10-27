console.log('hola :]')
import  express  from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";


import agentesRoutes from './routes/agentes.routes.js'
import Routes from './routes/router.js'
import indexR from './routes/index.routes.js'

// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
// var express = require('express');
var app = express();
 
// Set EJS as templating engine
app.set('view engine', 'ejs');
dotenv.config();
app.use(express.json());
app.use(express.static('public'))
app.use(cors())
// const app = express();
// app.get("/", function (req, res) {
//      res.render("../pages/index");
//   });
  app.get("/login", function (req, res) {
    res.render("../pages/login");
  });

//app.use(indexR) -> pong
app.use('/api',Routes)
app.use('/api',agentesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})



export default app