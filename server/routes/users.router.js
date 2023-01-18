const express = require('express');
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "id", "username", "email", "first_name", "last_name" FROM "users" ORDER BY "id" ASC;`;
  pool.query(queryText)
  .then((result) => {  
      res.send(result.rows)
  })
  .catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});

module.exports = router;