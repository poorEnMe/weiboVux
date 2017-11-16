const mongoose = require('mongoose');
const userSchema = require('../sacmes/userScames');

let user = mongoose.model('users',userSchema);

module.exports = user;
