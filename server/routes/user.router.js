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

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `
    UPDATE "users" 
      SET 
        "username" = $2,
        "email" = $3,
        "role" = $4,
        "first_name" = $5,
        "last_name" = $6,
        "phone" = $7,
        "comments" = $8
      WHERE "id" = $1;
  `;
  const sqlValues = [
    req.body.id,
    req.body.username,
    req.body.email,
    req.body.role,
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
    req.body.comments
  ];
  
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('UPDATE database error', error);
      res.sendStatus(500);
    });

});

router.put('/changePassword', rejectUnauthenticated, async (req, res) => {
  
  const user = req.user;
  const username = req.body.username;
  const passwordCurrent = req.body.password_current;
  const passwordNew = encryptLib.encryptPassword(req.body.password_new);

  console.log("WE ARE HERE");

  console.log(passwordCurrent);
  console.log(passwordNew);

  const passwordsMatch = await comparePasswords(username, passwordCurrent);



  if ( user.role === "ADMIN" || user.username === username && passwordsMatch ) {
    const queryValues = [username, passwordNew]
    const queryText = `UPDATE "users" SET "password" = $2 WHERE "users"."username" = $1;`;
    pool.query(queryText, queryValues)
      .then((result) => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log('Failed: ', err);
        res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = "DELETE FROM users WHERE id = $1"
  const sqlValues = [ req.params.id ]

  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('DELETE database error', error)
      res.sendStatus(500);
    })

})

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

function comparePasswords(username, password) {
  return new Promise((resolve, reject )=> {
      const queryValues = [username];
      const queryText = `SELECT "password" FROM "users" WHERE "users"."username" = $1;`;
      pool.query(queryText, queryValues)
      .then(async(result) => { 
          const storedPassword = result.rows[0].password;
          resolve(encryptLib.comparePassword(password, storedPassword));
      })
      .catch((error) => { 
          reject(error);
      });

  })
}

module.exports = router;
