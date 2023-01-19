const express = require('express');
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
});

router.post('/register', (req, res, next) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const role = req.body.role;
  const email = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "users" (first_name, last_name, username, role, email, password)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  pool
    .query(queryText, [firstName, lastName, username, role, email, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
