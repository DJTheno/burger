var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')
var handlebars = require('express-handlebars')

router.get('/', function (req, res) {
  // create an object that holds information from both the burger and menu table
  var info = {
    brgr: []
  }
  // grab data from burger table
  burger.selectAll(function (data) {
    for (var i = 0; i < data.length; i++) {
      info.brgr.push(data[i])
    }
    // grab data from menu table

    // send it all to the index.handlebars
    res.render('index', info)
  })
})

router.post('/create', function (req, res) {
  burger.insertOne([req.body.burgerInput], function () {
    res.redirect('/')
  })
})

router.put('/update/:id', function (req, res) {
  burger.updateOne([req.body.devoured], [req.params.id], function () {
    res.redirect('/')
  })
})

router.delete('/delete/:id', function (req, res) {
  burger.deleteOne([req.params.id], function () {
    res.redirect('/')
  })
})

module.exports = router
