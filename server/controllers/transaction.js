'use strict'
const Transactions = require('../models/transaction');


// create
exports.create = (req, res) => {
  console.log(req.body.user);
  console.log(req.body.itemList);
  let data = {
    user     : req.body.user,
    item : req.body.item,
    total    : req.body.total
  };
  Transactions.create(data)
  .then(data => {
    res.send(data);
  })
  .catch(e => {
    res.status(500).send(e);
  });
};


// read
exports.findAll = (req, res) => {
  Transactions.find({})
  // .populate('user itemlist')
  .populate('user', 'name')
  .populate('item', 'name price')
  .exec()
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.status(500).send(e);
  });
};

// update
// yang mau diupdate apa ya...?

// delete
exports.delete = (req, res) => {
  Users.remove({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.status(500).send(e)
  });
};