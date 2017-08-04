'use strict'
const router  = require('express').Router();
const ctrl    = require('../controllers/transaction');

// test
// router.get('/', (req, res) => {
//   console.log('user page');
//   res.send('transaction page');
// });

// create
router.post('/', ctrl.create);

// read
router.get('/', ctrl.findAll);

// update
// router.put('/:id', ctrl.update);

// delete
router.delete('/:id', ctrl.delete);


module.exports = router;