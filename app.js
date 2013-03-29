/**
 * PLAY Notification
 *
 * Copyright(c) 2012 Christophe Hamerling <chamerling@linagora.com>
 * MIT Licensed
 */

var express = require('express');
var app = express();
var count = 0;
var port = process.env.PORT || 3000;

// JSON
//app.use(express.bodyParser());

// Get body as String, will works in all cases...
app.use (function(req, res, next) {
  var data='';
  req.setEncoding('utf8');
  req.on('data', function(chunk) { 
     data += chunk;
  });

  req.on('end', function() {
      req.body = data;
      next();
  });
});


app.get('/', function(req, res){
  res.json({ requests : count} );
});

app.post('/subscriber', function(req, res) {
	console.log('Got a notification at', new Date().toGMTString());
	count++;
	console.log(req.body)
});

app.listen(port, function(err) {
	console.log('Notification listener is waiting messages on http://localhost:' + port + "/");
});