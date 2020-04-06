const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require("mongoose");
const path = require('path');
//const Post = require('./models/post');

const incidentRoute = require('./routes/incident');

const app = express();

const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mydb.com', 
     user:'myUser', 
     password: 'myPassword',
     connectionLimit: 5
});
console.log()
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
    console.log('err');
    console.log(err);
	throw err;
  } finally {
	if (conn){ 
    console.log('cnn');
    console.log(cnn);
    return conn.end();}
  }
}
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