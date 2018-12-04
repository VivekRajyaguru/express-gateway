var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userName: {type: String},
    password: {type: String},
    contactNo: {type: String},
    email: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    apiKey: {type: String},
    apiSecret: {type: String},
    scope: {type: String},
    user_id: {type: String},
    credential_id: {type: String}
});
schema.index({'userName': 1, 'email': 2}, {unique: true});
module.exports = mongoose.model('User', schema);