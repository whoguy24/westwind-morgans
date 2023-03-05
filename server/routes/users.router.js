const express = require('express');
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT "id", "username", "email", "phone", "first_name", "last_name", "role", "comments", created_by FROM "users" ORDER BY "id" ASC;`;
  pool.query(queryText)
  .then((result) => {  
    // if (req.user.role === "USER") {
    //   res.send(result.rows.filter(user=>user.created_by === req.user.username || user.username === req.user.username))
    // }
    // else {
      res.send(result.rows)
    // }
  })
  .catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});

module.exports = router;