require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/invoicer', { useNewUrlParser: true, useUnifiedTopology: true })
const errorHandler = require('./middlewares/errorHandler.js')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = mongoose.connection

// Routing
app.use(routes)

// Error handler
app.use(errorHandler)

db.on('error', () => console.log('Error connection to database'))
db.once('open', function () {
  // we're connected!
  app.listen(PORT, () => console.log('Server is running on PORT', PORT))
})
