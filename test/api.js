process.env.NODE_ENV = 'test'

var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
var should = chai.should()

chai.use(chaiHttp)

describe('API', function(){
    it('api should be running', function(done){
        chai.request(server)
            .get('/api')
            .end(function(err, res){
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('hello world!')
                done()
            })
    })
})
