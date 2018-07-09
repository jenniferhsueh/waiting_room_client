require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const request = require('request');


var usersRouter = require('./routes/users');
var yelpToken = process.env.YELP_API_KEY;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.get('/businesses', (req, res) => {
  request({
    url: 'https://api.yelp.com/v3/businesses/search?latitude=49.2838799&longitude=-123.1107835&categories=walkinclinics',
    auth: {
      bearer: yelpToken
    }
  }, (error, response, body) => {
    res.json(JSON.parse(body));
  });
});

app.get('/api/users', (req, res) => {
  const users = [
    {
      first_name: "Jennifer", 
      last_name: "Hsueh", 
      phone: 6043151860, 
      email: "jenn@jenn.com", 
      password: "jenn",
      deposit: false,
      location: {
        address1:"128 W Hastings St",
        address2: "",
        address3: "",
        city: "Vancouver",
        state: "BC",
        Zipcode: "V6B 1G8",
        country: "Canada",
      },
      coordinates: {
        lat: "41.864128", 
        long: "-87.669449"
      },
      clinics_id: 1
    },
    {
      first_name: "Joel", 
      last_name: "Shinness", 
      phone: 6043151860, 
      email: "joel@jenn.com", 
      password: "joel",
      deposit: true,
      location: {
        address1:"534 W Pender St",
        address2: "",
        address3: "",
        city: "Vancouver",
        state: "BC",
        Zipcode: "V6B 1V3",
        country: "Canada",
      },
      coordinates: {
        lat: "49.283599", 
        long: "-123.113811"
      },
      clinics_id: 2
    }
  ];
  res.json(users);
});

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

const PORT = 8080 

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

module.exports = app;
