'use strict'

const bodyParser = require('body-parser');
const cors       = require('cors')
const express    = require('express');
const mongoose   = require('mongoose');
const path       = require('path');

mongoose.connect('mongodb://localhost/pos');
// mongoose.connect('mongodb://hacktiv8:hacktiv8Super@cluster0-shard-00-00-remkh.mongodb.net:27017,cluster0-shard-00-01-remkh.mongodb.net:27017,cluster0-shard-00-02-remkh.mongodb.net:27017/pos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));

const register    = require('./routers/register')
const item        = require('./routers/item');
const transaction = require('./routers/transaction');
const user        = require('./routers/user');

// app.use('/', (req, res) => {
//   console.log('index page');
//   res.send('index page');
// });
app.use('/', register)
app.use('/item', item);
app.use('/transaction', transaction);
app.use('/user', user);


app.listen(3000, () => console.log('listening...'));
