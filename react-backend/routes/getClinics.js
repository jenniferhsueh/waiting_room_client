var express = require('express');
var router = express.Router();
const request = require('request');
var yelpToken = process.env.YELP_API_KEY;


router.post("/", (req, res) => {
  console.log("from getClinics.js fetching clinics=")
  
})