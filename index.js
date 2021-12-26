const express = require('express')
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

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Grab port info from config
const PORT = process.env.PORT || 3000

// HTTP requests
app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)