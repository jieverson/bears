var express = require('express')
var router = express.Router()

var Bear = require('../models/bear')

router.route('/bear')
    .post(function(req, res){
        var bear = new Bear()
        bear.name = req.body.name

        bear.save(function(err){
            if(err){
                res.status(400).send(err)
            }
            else{
                res.send(bear)
            }
        })
    })
    .get(function(req, res){
        Bear.find(function(err, bears){
            if(err){
                res.status(400).send(err)
            }
            else{
                res.send(bears)
            }
        })
    })

module.exports = router