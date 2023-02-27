const express = require('express');
// const { rejectUnauthenticated, } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    
  pool.query(
      `SELECT * FROM users;`,
      (error, result) => {
          if (error) {
              console.log(error);
          } else {
              console.log(result);
              res.send(result)
              
          }
      }
  )
  
});

module.exports = router;