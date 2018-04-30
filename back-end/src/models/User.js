
let { knex } = require('../config');
let bookshelf = require('bookshelf')(knex);

module.exports =  bookshelf.Model.extend({ tableName: 'user' });
