const db = require('../../data/dbConfig.js')

function findBy(filter) {
    return db('users').where(filter).orderBy('id')
  }

function findById(id) {
    return db('users').where({id}).first()
  }

async function add(user) {
    const [userID] = await db('users').insert(user, 'id');
    return findById(userID)
  }


  module.exports = { add, findBy, findById };