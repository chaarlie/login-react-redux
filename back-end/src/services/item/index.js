const { router, get, post } = require('microrouter');
const { send, json } = require('micro');

const { roles: { ADMIN_ROLE, MOD_ROLE, USER_ROLE }, QUEUE_NAME } = require('../../config');

const connection = require('../../mongoose');
const Item = require( '../../models/Item');
const processAuthentication = require('../../utilities/processAuthentication');

const requiredRoles = [ ADMIN_ROLE, MOD_ROLE, USER_ROLE ];

const fetchItems = async (req, res) => {
    Item.find()
        .select({ _id: 0 })
        .exec((err, items) => {
            if(err) {
                console.log(err.message);
                send(res, 500, 'an error has occurred');
            }
            if(!items || items.length == 0) {
                send(res, 404, 'No items found');
            }
            if(items) {
                send(res, 200, items);
            }
    });
}

const addItem = async (req, res) => {
    const { item } = req.body;
}


module.exports = router(
  get('/items', (req, res) => processAuthentication(req, res,  [ ADMIN_ROLE, MOD_ROLE, USER_ROLE ] , fetchItems)),
  post('/items', (req, res) => processAuthentication(req, res,  [ ADMIN_ROLE, MOD_ROLE  ] , addItem))
);