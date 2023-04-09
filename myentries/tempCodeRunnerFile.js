import express from 'express';
import cors from 'cors';
//const bodyParser = require('body-parser');
import { createConnection } from 'mysql';
// create express app
const app = express();
// Setup server port
const port = 5000;
const conn = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'mydb',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) {
    throw err;
    }
    console.log("Database Connected!");
  });

  // CORS is enabled for all origins
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
//app.use(bodyParser.json())
// define a root route

app.use(express.json()); //to accept data in json format 
// app.use(express.urlencoded()); //to decode data sent through html form
// app.use(express.static('public'));

  app.post('/mydb.myentries', (req, res) => {
    console.log("HEllo",req.body)
    var sql= `insert into mydb.myentries(LogEntry,Blog) values ("${req.body.Log}","${req.body.Info}")`;
    conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });



  app.get('/mydb.myentries', (req, res) => {
    var sql= "SELECT * FROM myentries";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

 


