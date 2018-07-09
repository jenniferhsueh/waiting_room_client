const express = require('express');
const router = express.Router();
const app = express();

var PORT = 8080

console.log("=====>>>>>>")

module.exports = (knex) => {

    router.get("/", (req, res, next) => {
     knex.select('*').from('users')
       .then((results) => {
         res.json(results)
       })
       .catch((e) => {
         res.status(500).send(e);
       })

    });

    router.get("/:id", (req, res, next) => {
   knex.select('*').from('users')
     .where('id', '=', req.params.id)
     .then((results) => {
       res.json(results)
     })
     .catch((e) => {
       res.status(500).send(e);
     })

 });

 return router
}