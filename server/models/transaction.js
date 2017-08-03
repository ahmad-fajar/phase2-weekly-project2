'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema



const Transactions = mongoose.model('transactions', transactionSchema)
module.exports = Transactions