const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};


//get
function get() {
    return db('accounts');
}


//get by id
function getById(id) {
    return db('accounts')
      .where({ id })
      .first();
  }


//insert
function insert(account) {
    return db('accounts')
      .insert(account)
      .then(ids => {
        return getById(ids[0]);
      });
  }


//update
function update(id, account) {
    return db('accounts')
      .where('id', Number(id))
      .update(account);
  }


//remove
function remove(id) {
    return db('accounts')
      .where('id', Number(id))
      .del();
  }
