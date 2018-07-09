const express = require('express');
const router = express.Router();
const app = express();

var PORT = 8080

module.exports = (knex) => {

    router.get("/", (req, res, next) => {
     knex
      .select('*')
      .from('users')
      .then((results) => {
         res.json(results)
       })
      .catch((e) => {
         res.status(500).send(e);
       })

    });

    router.get("/:id", (req, res, next) => {
   knex
    .select('*').from('users')
    .where('id', '=', req.params.id)
    .then((results) => {
       res.json(results)
     })
    .catch((e) => {
       res.status(500).send(e);
     })

 });

    router.post("/", (req, res, next) => {
        // {email, password} = req.body
        console.log("OUR STATE=====>", req.body)
    });


    router.post("/new", (req, res, next) => {
        // {email, password} = req.body
        console.log("OUR NEW USER =====>", req.body)
    });

 return router

}