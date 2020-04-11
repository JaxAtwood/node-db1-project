const express = require("express");
const Accounts = require('../accounts/accountsDb.js');

const server = express();

server.use(express.json());


server.get('/api/accounts', (req, res) => {
    Accounts.get()
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "Cannot GET accounts data"})
        })
});


server.get("/api/accounts/:id", (req, res) => {
    const id = req.params.id;

    Accounts.getById(id)
        .then(account => {
            console.log(account)
            if (account => account.id === id) {
                res.status(200).json(account);  
            } else {
                res.status(404).json({ errorMessage: "The account with the specified ID does not exist" })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: "The account could not be retrieved"})
        })
})


server.post("/api/accounts", (req, res) => {
    const account = req.body;
    console.log(account)

    Accounts.insert(account)
    .then(param => {
        if (account.name && account.budget) {
            res.status(201).json({success: true, param})
        } else {
            res.status(400).json({ errorMessage: "Please provide name and budget amount" })
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "There was an error while saving the account to the db", err});
    });
})


server.put("/api/accounts/:id", (req, res) => {
    const { id } = req.params;
    const updatedAccount = req.body;

    Accounts.update(id, updatedAccount)
    .then(account => {
        if (account) {
            if (updatedAccount.name && updatedAccount.budget) {
                res.status(201).json({ updatedAccount });
            } else {
                res.status(400).json({
                    errorMessage: 'Please provide name and budget for the account.'
                });
            }
        } else {
            res.status(404).json({
                message: 'The account with the specified ID does not exist.'
            });
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "The account info could not be modified", err });
    })
})


server.delete("/api/accounts/:id", (req, res) => {
    const {id} = req.params;

    Accounts.remove(id)
    .then(id => {
        if (account => account.id === id) {
            res.status(201).json({ message: `account deleted` });
        } else {
            res.status(404).json({ errorMessage: "The account with the specified ID does not exist"});
        }
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "The account could not be removed"});
    })
})
module.exports = server;
