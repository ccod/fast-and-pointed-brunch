// Module Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var api = require('./api');

var app = module.exports = express();

//
// Configuration
//

var assetsPath = path.join(__dirname, '..', '_public');

// all environments
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express["static"](assetsPath));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
// if app.get('env') is 'production'
  // TODO

//
// Routes
//

// JSON API
app.get('/api/name', api.name);

// serve index for all other routes
app.get('*', function(req, res) {
  return res.sendfile("" + assetsPath + "/index.html");
});


//
// Start Sever
//
module.exports.startServer = function(port, path, callback) {
  app.set('port', port);
  return http.createServer(app).listen(port, function() {
    return console.log("Express server listening on port " + port);
  });
};
