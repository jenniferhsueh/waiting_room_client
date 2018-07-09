var express = require('express');
var router = express.Router();
const request = require('request');
var yelpToken = process.env.YELP_API_KEY;


/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    url: 'https://api.yelp.com/v3/businesses/search?latitude=49.2838799&longitude=-123.1107835&categories=walkinclinics',
    auth: {
      bearer: yelpToken
    }
  }, (error, response, body) => {
    res.json(JSON.parse(body));
  });
});

module.exports = router;
