require('dotenv').config();
var createError       = require('http-errors');
var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var logger            = require('morgan');
const request         = require('request');
const usersRoutes     = require("./routes/users");
var yelpToken = process.env.YELP_API_KEY;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clinicsRouter = require('./routes/getClinics');

var app               = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

app.use('/api/clinics', clinicsRouter)
app.use('/', indexRouter);
app.use('/api/users', usersRouter(knex));
app.get('/businesses', (req, res) => {

  knex('clinics').select('*')
    .then((results) => {
      
      if (results.length > 2) {
        console.log('clinics from app.js =====>', results)
        res.json({businesses: results});
      } else {
        request({
          url: 'https://api.yelp.com/v3/businesses/search?latitude=49.2838799&longitude=-123.1107835&categories=walkinclinics',
          auth: {
            bearer: yelpToken
          }
        }, (error, response, body) => {
          if (error) {
            console.log("oh shit son", error);
            res.status(500).json(error);
            return;
          }
          let clinics = JSON.parse(body).businesses.map(clinic => ({
            name: clinic.name,
            phone: clinic.display_phone,
            website: clinic.url,
            hours: clinic.hours,
            avg_wait_time: (Math.floor(Math.random() * 60)),
            location: {
              address1: clinic.location.address1,
              address2: "",
              address3: "",
              city: clinic.location.city,
              state: clinic.location.state,
              Zipcode: clinic.location.zip_code,
              country: clinic.location.country,
            },
            coordinates: {
              latitude: clinic.coordinates.latitude,
              longitude: clinic.coordinates.longitude
            },
            created_at: new Date(),
            updated_at: new Date()
          }));

          console.log('results from app.js =====>', results)

          knex('clinics')
            .insert(clinics)
            .returning('*')
            .catch(() => {console.log("error 79");})
            .then((results) => {
              res.json({businesses: results});
            })
            .catch(() => {console.log("error 83");})
        });


      }
    })
    .catch((err) => {
      res.status(500).json({error: "error 90"})
    })

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