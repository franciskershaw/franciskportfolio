const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Connect to Mongo database
connectDB()

// Initialize app
const app = express()

// Nunjucks
nunjucks.configure('views', {
    autoescape:true,
    express: app
})
app.set('view engine', 'html')

// Static
app.use(express.static(path.join(__dirname, 'static')))

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Grab port info from config
const PORT = process.env.PORT || 3000

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)