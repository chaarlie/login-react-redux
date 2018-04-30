const { router, get, post } = require('microrouter');
const { send, json } = require('micro');

const { roles: { ADMIN_ROLE }, QUEUE_NAME } = require('../../config');

const User = require( '../../models/User');
const processAuthentication = require('../../utilities/processAuthentication');

const fetchUsers = async (req, res) => {
  let userFetch = new User();
  let users =  await userFetch.fetch();
  send(res, 200, users);
}

module.exports = router(
  get('/users', (req, res) => processAuthentication(req, res, [ ADMIN_ROLE ], fetchUsers))
);