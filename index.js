const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const secret = require("./constants/secret");
const Organization = require("./models/org");
const User = require("./models/user.js");

const authRoutes = require("./routes/auth");
const orgRoutes = require("./routes/org");

const port = 3000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/protest");

app.use(require("express-session")(({
    secret: secret.secret,
    resave: false,
    saveUninitialized: false
})));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     next();
// });

app.use(authRoutes);
app.use(orgRoutes);

app.listen(port, () => console.log(`ProtestInfo listening at http://localhost:${port}`));