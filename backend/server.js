if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: './config/config.env' });
}

const dotenv = require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const connectDB = require('./config/db');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Admin = require('./models/Admin');

const MongoDBStore = require("connect-mongo");

// Connect to Mongo database
connectDB();

// Initialize app
const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method override
app.use(methodOverride('_method'));

// Nunjucks
nunjucks.configure('views', {
    autoescape:true,
    express: app
});
app.set('view engine', 'html');

// Static
app.use(express.static(path.join(__dirname, 'static')));

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Storing session data in MongoDb
// const secret = process.env.SESSION_SECRET || 'thishouldbeabettersecret!';
// const store = new MongoDBStore({
//     mongoUrl: process.env.MONGO_URI,
//     secret: secret,
//     touchAfter: 24 * 60 * 60
// });
// store.on("error", function (e) {
//     console.log("SESSION STORE ERROR", e)
// })

// Sessions
// const sessionConfig = {
//     store,
//     secret: secret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         name: 'session',
//         httpOnly: true,
//         // secure: true,
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 7
//     }
// }
// app.use(session(sessionConfig))

// Flash
app.use(flash());

// Configure passport and local strategy
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// Global context - all templates have access to these
app.use((req, res, next) => {
    // Logged in user
    res.locals.admin = req.user;
    // Flash
    res.locals.success = req.flash('success');
    // res.locals.error = req.flash('error');
    next();
})

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/projects', require('./routes/projects'));
app.use('/skills', require('./routes/skills'));


// Grab port info from config
const PORT = process.env.PORT || 5000;

// Listen for app
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);