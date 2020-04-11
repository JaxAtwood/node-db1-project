// const express = require('express');
// const Accounts = require('./accountsDb.js');

// const router = express.Router();

// router.get('/api/accounts', (req, res) => {
//     Accounts.get()
//         .then(accounts => {
//             res.status(200).json(accounts);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ errorMessage: "Cannot GET accounts data"})
//         })
// });

// router.get('/:id', (req, res) => {

// });

// router.post('/', (req, res) => {

// });

// router.put('/:id', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });

// module.exports = router;