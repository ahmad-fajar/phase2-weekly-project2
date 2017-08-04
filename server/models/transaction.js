'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
  user : [{
    type : Schema.Types.ObjectId,
    ref : 'users'
  }],

  item : [{
    type : Schema.Types.ObjectId,
    ref : 'items'
  }],

  date : {
    type    : Date,
    default : Date.now
  },

  total : {
    type      : Number,
    required  : true,
    validate : {
      validator : function(a) {
        return a >= 0;
      },
      message : 'Total must be positive integer'
    }
  }

});

const Transaction = mongoose.model('transactions', TransactionSchema)
module.exports = Transaction


// const TransactionSchema = new Schema({
//   date : {
//     type     : Date,
//     required : true
//   },
//   total : {
//     type     : Number,
//     required : true
//   },
//   connections : [{
//     kind : String,
//     item : {
//       type    : ObjectId,
//       refPath : 'connections.kind'
//     }
//   }]
//   }
// })

// const TransactionSchema = new Schema({
//   userId : {
//     type     : ,
//     required : true
//   },
//   date : {
//     type     : Date,
//     required : true
//   },
//   total : {
//     type     : Number,
//     required : true
//   },
//   itemList :
//   }
// })