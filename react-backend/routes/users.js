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
      let newUser;

      if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.pw || !req.body.confirmPw || req.body.pw !== req.body.confirmPw) {
        res.status(400).send(console.log("youre a little beee yatch"))

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
        .then(() => console.log("WE DEEEED IIIIIT", newUser))
        .catch((e) => {
          console.log("====>", e)
           res.status(500).send(e);
        })
      }
    });

 return router
}