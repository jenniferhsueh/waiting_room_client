const express = require('express');
const router = express.Router();
const app = express();

var PORT = 8080

module.exports = (knex) => {

    router.post("/new-at-clinic/:clinicId", (req, res, next) => {

      knex('visits')
        .insert(
          {
            waiting: true,
            users_id: req.params.clinicId,
            clinics_id: 1,  
          }
        )
        .catch((e) => {
           res.status(500).send(e);
        })
    });

 return router
}