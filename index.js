require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("./schemas/userSchema");

const uri = process.env.mongodbString;

const PORT = process.env.PORT || 4001;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/register", function (req, res) {
  User.register(
    new User({ email: req.body.email, username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: " + err,
        });
      } else {
        req.login(user, (er) => {
          if (er) {
            res.json({ success: false, message: er });
          } else {
            res.json({ success: true, message: "Your account has been saved" });
          }
          console.log("48");
        });
      }
    }
  ).then(() => {
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  });
});

app.post("/login", function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          res.json(
            {
              success: true,
              message: "Authentication successful",
            },
            passport.serializeUser(User.serializeUser()),
            passport.deserializeUser(User.deserializeUser())
          );
        }
      }
    })(req, res);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose.connect(uri);
});
