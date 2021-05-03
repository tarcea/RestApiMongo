const express = require('express')
const router = express.Router()

// All authors
router.get('/', (req, res) => {
  res.render('authors/index')
})

// New author
router.get('/new', (req, res) => {
  res.render('authors/new')
})

// Create an author
router.post('/', (res, req) => {
  res.setEncoding("create")
})
module.exports = router