var express = require('express')

var app = express()
var path = require('path')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'codingIsfun',
  database : 'friendfinder_db'
});
 
connection.connect();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    connection.query('SELECT * FROM friendfilter_statements', function (error, results, fields) {
        if (error) res.send(error)
        console.log(results)
        res.render('index', {data:results})
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
