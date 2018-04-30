const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'comments_items_db'
  }
});
const ADMIN_ROLE = 3;
const MOD_ROLE = 2;
const USER_ROLE = 1;

module.exports = {
  knex,
  roles: {
    ADMIN_ROLE,
    MOD_ROLE,
    USER_ROLE
  },
  QUEUE_NAME: 'role_queue',
  TOKEN_SECRET: 'someSecret'
}