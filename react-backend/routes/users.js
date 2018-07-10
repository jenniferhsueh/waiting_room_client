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
      .select('*')
      .from('users')
      .where('id', '=', req.params.id)
      .then((results) => {
         res.json(results)
       })
      .catch((e) => {
         res.status(500).send(e);
       })
    });

    router.post("/new", (req, res, next) => {
      let newUser;

      if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.pw || !req.body.confirmPw || req.body.pw !== req.body.confirmPw) {
        res.status(400)

      } else {
        knex('users')
        .insert(
          newUser = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            phone: null,
            email: req.body.email,
            password: req.body.pw,
            deposit: false,
            location: {
              address1:"",
              address2: "",
              address3: "",
              city: "",
              state: "",
              Zipcode: "",
              country: "",
            },
            coordinates: {
              lat: "",
              long: ""
            },
            clinics_id: null
          }
        )
        .catch((e) => {
           res.status(500).send(e);
        })
      }
    });

    router.post("/", (req, res) => {
      if (!req.body.email || !req.body.pw) {
        return res.status(400)

      } else {
        let currentUser;
        knex('users')
          .where({
            email: req.body.email,
            password: req.body.pw
          })
          .select("*")
          .then((results) => {
             currentUser = results[0]
             res.send(currentUser)
           })
          .catch((e) => {
             res.status(500).send(e);
           })
        }
    })

 return router
}