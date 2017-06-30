//Local parameters
require('./.env');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var passport = require('passport');

// Declaring Route files
var api = require('./routes/api');
//var noauth = require('./routes/noauth');
//var index = require('./routes/index');
//var users = require('./routes/users');
//var study = require('./routes/study');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
//-------For oauth--------
app.use(passport.initialize());
app.use(passport.session());
//-----End for oauth------

//Routing to specific route files depending on the incomming url.

//the default in use
app.use('/brapi/v1', api);

///---------------------Testing routes------------------------
//Experiment for no auth
//app.use('/noauth/brapi/v1', noauth);
//app.use('/', index);
//app.use('/users', users);
//app.use('/study', study);
/// ------------------End testing routes----------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
