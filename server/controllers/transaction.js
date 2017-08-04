'use strict'
const Transactions = require('../models/transaction');


// create
exports.create = (req, res) => {
  // console.log(req.body.user);
  // console.log(req.body.item);
  let data = {
    user     : req.body.user,
    item     : req.body.item,
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

exports.add = (req, res) => {
  Transactions.updateOne({_id : req.body.id}, {$push: {item: req.body.itemId}})
  .then(added => {
    res.send(added)
  })
  .catch(e => {
    res.status(500).send(e);
  });
}


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

exports.findGroupedPerUser = (req, res) => {
  // let tes = ['abc']
  let userList = Transactions.distinct('user')
  .then(distincted => {
    console.log('aaa',distincted)
  })
  console.log('bbb', userList);
  res.send(userList)
}

// update
// yang mau diupdate apa ya...?

// delete
exports.delete = (req, res) => {
  Transactions.remove({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.status(500).send(e)
  });
};


