var express = require('express');
var router = express.Router();
const request = require('request');

module.exports = (knex) => {

  router.get('/wait_times', function (req, res) {
    const since = req.params.since;
    const timestamp = new Date(since);
    knex.table('clinics').where('updated_at > ?', timestamp).then;
  })

  return router
}

