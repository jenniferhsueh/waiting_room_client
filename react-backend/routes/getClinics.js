var express = require('express');
var router = express.Router();
const request = require('request');
var yelpToken = process.env.YELP_API_KEY;

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log("========================")
    // knex('clinics')
    //   .insert()
    //   .catch((e) => {
    //    res.status(500).send(e);
    // })
    })

  // router.post("/", (req, res, next) => {
  //   let newClinics;
  //   // knex('clinics')
  //   // .insert(
  //   // )
  //   // .catch((e) => {
  //   //    res.status(500).send(e);
  //   // })

  // });


  return router
}

