var express = require('express')
var app = express()
 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'codingIsfun',
  database : 'friendfinder_db'
});
 
connection.connect();

app.get('/', function(req, res){
    connection.query('SELECT * FROM friendfilter_statements', function (error, results, fields) {
        if (error) res.send(error)
        else res.json(results);
        // if (error) throw error;
        console.log('questions should show now');
      });
})

 
// connection.end();

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname,'public/survey.html'));
    console.log('show survey html file')
});
 
app.listen(3000)
console.log ('Listening on localhost 3K')
