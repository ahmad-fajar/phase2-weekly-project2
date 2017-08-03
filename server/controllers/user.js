'use strict'
const Users = require('../models/user');


// create
exports.create = (req, res) => {
  let data = {
    name     : req.body.name,
    username : req.body.username,
    password : req.body.password,
    role     : req.body.role
  };
  Users.create(data)
  .then(user => {
    res.send(user);
  })
  .catch(e => {
    res.status(500).send(e);
  });
};


// read
exports.findAll = (req, res) => {
  Users.find({})
  .then(users => {
    res.send(users)
  })
  .catch(e => {
    res.status(500).send(e);
  });
};

// update
exports.update = (req, res) => {
  Users.findOne({_id: req.params.id})
  .then(data => {
    console.log(data);
    let infoUpdate = {
        name     : req.body.name     || data.name,
        username : req.body.username || data.username,
        password : req.body.password || data.password,
        role     : req.body.role     || data.role
    }
    Users.findOneAndUpdate({_id: req.params.id}, infoUpdate)
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
  Users.remove({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(e => {
    res.status(500).send(e)
  });
};