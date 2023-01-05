const { string } = require('joi')
const mongoose = require('mongoose')
const PassportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const Userschema = Schema({
    email: {
        type: String,
        required: true
    }
})
Userschema.plugin(PassportLocalMongoose)
module.exports = mongoose.model('User', Userschema)