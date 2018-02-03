"use strict";
/*eslint no-unused-vars: 0*/

const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

function authorizedUser(req, res, next) {
  let userID = req.session.user.id;
  if (userID) {
    next();
  } else {
    res.send("You are not authorized");
  }
}

router.get("/", authorizedUser, function(req, res, next) {
  let clientID = req.session.user.id;
  knex("clients").where("id", clientID).first().then(function(client) {
    res.render("metrics/home", {
      client: client,
    });
  });
});

module.exports = router;
