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
router.post('/add', ctrl.add);

// read
router.get('/', ctrl.findAll);
// router.get('/peruser', ctrl.findGroupedPerUser)

// update
// router.put('/:id', ctrl.update);

// delete
router.delete('/:id', ctrl.delete);


module.exports = router;