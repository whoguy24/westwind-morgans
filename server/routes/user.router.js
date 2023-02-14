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

router.put('/:id/changePassword', rejectUnauthenticated, async (req, res) => {
  
  const loggedInUsername = req.user.username;
  const requestUsername = req.body.username

  const passwordCandidate = req.body.password_current;
  const passwordNew = encryptLib.encryptPassword(req.body.password_new);

  const passwordsMatch = await comparePasswords(loggedInUsername, passwordCandidate);

  if ( loggedInUsername === requestUsername && passwordsMatch ) {

    const queryValues = [loggedInUsername, passwordNew]
    const queryText = `UPDATE "users" SET "password" = $2 WHERE "users"."username" = $1;`;
    pool.query(queryText, queryValues)
      .then((result) => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log('Failed: ', err);
        res.sendStatus(500);
    });

    }
    else if (!passwordsMatch) {
      res.sendStatus(401);
    }
  else {
    res.sendStatus(500);
  }

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = "DELETE FROM users WHERE id = $1"
  const sqlValues = [ req.params.id ]

  const loggedInUser = req.user
  const userToDelete = req.body

  if ( loggedInUser.username != userToDelete.username && loggedInUser.role === "ADMIN" || userToDelete.created_by === loggedInUser.username ) {
    pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('DELETE database error', error)
      res.sendStatus(500);
    })
  }
  else if (loggedInUser.username === userToDelete.username) {
      res.sendStatus(400);
  } 
  else if (loggedInUser.role != "ADMIN" && userToDelete.created_by != loggedInUser.username) {
      res.sendStatus(401);
  }

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
