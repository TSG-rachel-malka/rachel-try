const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require("mongoose");
const path = require('path');
//const Post = require('./models/post');

const incidentRoute = require('./routes/incident');

const app = express();

/*mongoose.connect("mongodb+srv://malka:"+
                  process.env.MONGO_ATLAS_PW +
                  "@cluster0-bik5o.mongodb.net/test"
                ,{useNewUrlParser: true,  useUnifiedTopology: true })
.then(() =>{
    console.log('conected to database');})
.catch(()=>{
    console.log('conected failed!!');
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     res.setHeader(
       "Access-Control-Allow-Methods",
       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
     );

 
    next();
  });
console.log('Server is runing');

app.use("/api/incident", incidentRoute);

module.exports = app;