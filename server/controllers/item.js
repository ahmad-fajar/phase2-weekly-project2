'use strict'
const Items = require('../models/item');


// create
exports.create = (req, res) => {
  let data = {
    name  : req.body.name,
    price : req.body.price,
    stock : req.body.stock
  };
  Items.create(data)
  .then(user => {
    res.send(user);
  })
  .catch(e => {
    res.status(500).send(e);
  });
};


// read
exports.findAll = (req, res) => {
  Items.find({})
  .then(users => {
    res.send(users)
  })
  .catch(e => {
    res.status(500).send(e);
  });
};

// update
exports.update = (req, res) => {
  Items.findOne({_id: req.params.id})
  .then(data => {
    console.log(data);
    let infoUpdate = {
        name  : req.body.name  || data.name,
        price : req.body.price || data.price,
        stock : req.body.stock || data.stock
    }
    Items.findOneAndUpdate({_id: req.params.id}, infoUpdate)
    .then(updated => {
      res.send(updated)
    })
  })
  .catch(e => {
    res.status(500).send(e)
  });
};


// delete
exports.delete = (req, res) => {
  Items.remove({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.status(500).send(e)
  });
};