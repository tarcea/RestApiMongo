const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All authors
router.get('/', (req, res) => {
  res.render('authors/index')
})

// New author
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})

// Create an author
router.post('/', (req, res) => {
  res.send("create")
})
module.exports = router