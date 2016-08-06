var express = require('express')
var app = express()
var config = require('config')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var mongoose = require('mongoose')
mongoose.connect(config.DB)

var port = process.env.PORT || 3000

var router = express.Router()

router.get('/', function(req, res){
    res.send({ message: 'hello world!' })
})

app.use('/api', router)

var bear = require('./app/routes/bear')
app.use('/api', bear)

app.listen(port)
console.log('Magic happens on port :' + port)

module.exports = app