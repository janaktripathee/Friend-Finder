var express = require('express');
var app = express();
app.use(express.static("public"));

var mysql = require('mysql');
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:'password',
	database :"surver_db"

});

connection.connect();





// var express = require('express');
// var app = express();

// app.use(express.static("public"));

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'cats_db'
// });
 
// connection.connect();

// app.get('/cats.json', function(req, res){
// 	connection.query('SELECT * FROM cats', function (error, results, fields) {
// 	  if (error) res.send(error)
// 	  else res.json(results);
// 	});
// });

// // http://localhost:3001/cats-insert?cat_name=bobbi

// app.get('/cats-insert', function(req, res){
// 	connection.query('INSERT INTO cats (cat_name) VALUES (?)', [req.query.cat_name],function (error, results, fields) {
// 	  if (error) res.send(error)
// 	  else res.json({
// 	  	message: 'success'
// 	  });
// 	});
// });

// app.get('/cats-delete', function(req, res){
// 	connection.query('DELETE FROM cats WHERE id = (?)', [req.query.cat_id],function (error, results, fields) {
// 	  if (error) res.send(error)
// 	  else res.json({
// 	  	message: 'success'
// 	  });
// 	});
// });

app.listen(3001, function(){
	console.log('listening on 3001');
});






