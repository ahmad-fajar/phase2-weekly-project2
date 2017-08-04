const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/signin')
require('dotenv').config()

function signup(req,res){
  let salt = helper.random();
  console.log(req.body.password);
  let pass = helper.cryptoPass(req.body.password, salt)
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: pass,
    role: req.body.role,
    salt: salt
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin (req, res){
  User.findOne({
    username: req.body.username
  })
  .then(result => {
    let salt = result.salt
    let pass = helper.cryptoPass(req.body.password, salt )
    if(result.password == pass){
      let token = jwt.sign({
        name: result.name,
        username: result.username,
        role: result.role
      }, process.env.SECRET_KEY)
      req.headers.token = token
      let objectGabungan = {
        token: token,
        role: result.role
      }
      res.send(objectGabungan)
    }else {
      res.send('wrong password')
    }
  })
  .catch(err =>{
    res.send(err)
  })
}


module.exports = {
  signup,
  signin
};
