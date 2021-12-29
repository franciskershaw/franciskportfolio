const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Project = require('./models/Project.js')

// Load config
dotenv.config({ path: './config/config.env' })

// Connect to Mongo database
connectDB()

// Initialize app
const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Method override
app.use(methodOverride (function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
  })
)

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
app.use('/', require('./routes/index'))
app.use('/projects', require('./routes/projects'))

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)