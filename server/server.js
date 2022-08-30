const express = require('express');

// const path = require('path');

// const bodyParser = require('body-parser');
// require('dotenv').config();

const app = express();

// const sessionMiddleware = require('./modules/session-middleware');

// const passport = require('./strategies/user.strategy');

// Route includes
// const userRouter = require('./routes/user.router');
// const usersRouter = require('./routes/users.router');
// const stallionsRouter = require('./routes/stallions.router');

// Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
// app.use(sessionMiddleware);

// start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

/* Routes */
// app.use('/api/user', userRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/stallions', stallionsRouter);

const mysql = require("mysql");

// this creates the pool that will be shared by all other modules
const db = new mysql.createConnection({
  user: "whoguy24",
  host: "68.178.247.44",
  password: "Bastogne24!",
  database: "westwind_morgans"
})

app.get("/select", (req, res)=> {
  db.query("SELECT * FROM horses", (error, result)=>{
    if (error) {
      console.log(error);
    }
    res.send(result);
  })
})

// Serve static files
// app.use(express.static("build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname,  "build", "index.html"));
// });

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});