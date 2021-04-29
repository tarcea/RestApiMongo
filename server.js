
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config() //parse()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conected to DB'))
app.use(express.json())
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000, () => console.log(`Server started and running on port ${process.env.PORT || 3000}`))