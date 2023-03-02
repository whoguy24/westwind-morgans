const express = require('express');
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const nodemailer = require("nodemailer");
const crypto = require("crypto");

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
});

router.post('/register', async (req, res, next) => {

  const users = await fetchUsernames();

  if ( users.filter(user=>user.username === req.body.username).length === 0 ) {

    const queryValues = [
      req.body.username,
      req.body.email,
      req.body.role,
      req.body.first_name,
      req.body.last_name,
      req.body.phone,
      req.body.comments,
      encryptLib.encryptPassword(req.body.password),
      req.body.created_by
    ];

    const queryText = `INSERT INTO "users" (username, email, role, first_name, last_name, phone, comments, password, created_by)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`;
    pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
      });
      
    }
    else {
      res.sendStatus(400);
    }


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


router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = "DELETE FROM users WHERE id = $1"
  const sqlValues = [ req.params.id ]

  const loggedInUser = req.user
  const userToDelete = req.body

  console.log(loggedInUser)
  console.log(userToDelete)

  console.log(loggedInUser.username === userToDelete.username)
  console.log(loggedInUser.role != "ADMIN" && userToDelete.created_by != loggedInUser.username)

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
  else {
    res.sendStatus(500);
  }

})

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});















router.put('/:email/resetPassword', async (req, res) => {

  console.log("WE'RE HERE")

  const user = await fetchUserByEmail(req.body.email);

  console.log(user)

  if (user) {
    let token = crypto.randomBytes(20).toString("hex");
    const queryValues = [user.id, token]
    const queryText = `
      UPDATE "users" 
        SET 
          "reset_token" = $2
      WHERE "id" = $1;
  `;
    pool.query(queryText, queryValues)
      .then((result) => {
        sendEmail(user.username, user.email, token);
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log('Failed: ', err);
        res.sendStatus(500);
    });
  } else {
    res.sendStatus(500);
  }

});

function fetchUserByEmail (email) {
  return new Promise((resolve, reject )=> {
    const queryValues = [email]
    const queryText = `SELECT "id", "username", "email" FROM "users" WHERE "users"."email" = $1;`;
    pool.query(queryText, queryValues)
    .then(async(result) => { 
        resolve(result.rows[0]);
    })
    .catch((error) => { 
        reject(error);
    });
  })
}

function sendEmail(username, email, token) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: "whoguy24@gmail.com",
    to: email,
    subject: 'Westwind Morgans',
    text: `localhost:3000/#/resetPassword/${username}/${token}`
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

}















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

function fetchUsernames() {
  return new Promise((resolve, reject )=> {
      const queryText = `SELECT "username" FROM users;`;
      pool.query(queryText)
      .then(async(result) => { 
          resolve(result.rows);
      })
      .catch((error) => { 
          reject(error);
      });

  })
}




module.exports = router;
