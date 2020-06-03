var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homeRouter')

var app = express();
var session = require("express-session")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'Secreto!'}));
app.use(function(req,res, next){
  if(req.session.erroresregistracion){
    res.locals = {
      erroresregistracion:req.session.erroresregistracion
    }
    req.session.erroresregistracion = null
  }
  next()
})

app.use(session({secret: 'Secreto!'}));
app.use(function(req,res, next){
  if(req.session.errores2){
    res.locals = {
      errores2:req.session.errores2
    }
    req.session.errores2 = null
  }
  next()
})

app.use(session({secret: 'Secreto!'}));
app.use(function(req,res, next){
  if(req.session.errores3){
    res.locals = {
      errores3:req.session.errores3
    }
    req.session.errores3 = null
  }
  next()
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);



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
