process.env.NODE_ENV = 'test'

var mongoose = require('mongoose')
var Bear = require('../app/models/bear')

var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var should = chai.should()

chai.use(chaiHttp)

describe('Bears', function(){
    beforeEach(function(done){
        Bear.remove({}, function(err){
            done()
        })
    })
    
    describe('/GET bear', function(){
        it('it should get all the bears', function(done){
            chai.request(server)
                .get('/api/bear')
                .end(function(err, res){
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                })
        })
    })

    describe('/POST bear', function(){
        it('it should not post a bear without name', function(done){
            var bear = {}
            chai.request(server)
                .post('/api/bear')
                .send(bear)
                .end(function(err, res){
                    res.should.have.status(400)
                    done()
                })
        })

        it('it should insert a bear with name', function(done){
            var bear = { name: 'panda' }
            chai.request(server)
                .post('/api/bear')
                .send(bear)
                .end(function(err, res){
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.name.should.be.eql('panda')
                    res.body._id.should.not.be.null
                    done()
                })
        })
    })
})
