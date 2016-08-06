var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BearSchema = new Schema({
    name: { type: String, required: true }
})

var model = mongoose.model('Bear', BearSchema)
module.exports = model