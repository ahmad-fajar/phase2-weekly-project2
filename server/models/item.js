'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type     : String,
    required : true
  },
  price : {
    type     : Number,
    required : true,
    validate : {
      validator : function(a) {
        return a >= 0;
      },
      message : 'Price must be positive integer'
    }
  },
  stock : {
    type     : Number,
    required : true,
    validate : {
      validator : function(a) {
        return a >= 0;
      },
      message : 'Stock must be positive integer'
    }
  },
  image : {
    type     : String,
    default  : 'http://used.agwest.com/images/default-image-agwest-thumb.jpg'
  }
});

const Item = mongoose.model('items', UserSchema);
module.exports = Item;