const createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var databaseconnection= require("./config/databaseconnection");
const cors = require('cors')

//Declarando las variables de los modelos
var destinosRouter = require('./routes/destinos.router');
var reservasRouter = require('./routes/reservas.router');


var app = express();

// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//Conexión de mongo
databaseconnection.mongoConnect();

//Routers
app.use('/destinos', destinosRouter);
app.use('/reservas', reservasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
