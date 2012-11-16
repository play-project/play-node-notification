/**
 * PLAY Notification
 *
 * Copyright(c) 2012 Christophe Hamerling <chamerling@linagora.com>
 * MIT Licensed
 */

var express = require('express');
var app = express();
var count = 0;
var port = process.env.PORT || 3001;

app.get('/', function(req, res){
  res.json({ requests : count} );
});

app.post('/', function(req, res) {
	console.log('Got a notification at ', new Date().toGMTString());
	count++;
	console.log(req.body)
});

app.listen(port, function(err) {
	console.log('Notification listener is waiting messages on http://localhost:' + port + "/");
});