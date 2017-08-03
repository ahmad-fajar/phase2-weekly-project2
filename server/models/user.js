'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type     : String,
    required : true
  },
  username : {
    type     : String,
    required : true
  },
  password : {
    type     : String,
    required : true
  },
  role : {
    type     : String,
    required : true
  }
});

const Users = mongoose.model('users', UserSchema);
module.exports = Users;