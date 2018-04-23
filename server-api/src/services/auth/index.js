const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { router, get, post } = require('microrouter');
const { json, send } = require('micro');

const User = require( '../../models/User');

const { TOKEN_SECRET } = require('../../config');
 
const authenticate =  async (req, res) => {  
  let { credentials: { username, password } } = await json(req);

  try {
    if(!username || !password) {
      send(res, 500, { message: 'Both fields are required' });
    }

    let user = await User.where({ username }).fetch({require: true}).tap(); 
    let authenticated = await bcryptjs.compareSync(password, user.get('password'));
    
    if(!authenticated) send(res, 403, { message:'Invalid credentials' } );
    
    const token = jwt.sign( user.omit('password') , TOKEN_SECRET , { expiresIn: 60*60 });
    send(res, 200, { token });

  } catch (err) {
    console.log(err.message);
    send(res, 500, { message: 'A server error occurred' });
  }
}

module.exports = router(
  post('/authenticate/login', authenticate)
);