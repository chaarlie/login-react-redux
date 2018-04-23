const jwt = require( 'jsonwebtoken');

const { TOKEN_SECRET } = require('../config');

const validateRole = require('../message-queue/validateRole');

module.exports = (req, res, role, cb) => {
  return new Promise(() => {
    if(!req.headers.authorization || req.headers.authorization.length < 1) {
      res.writeHead(400, {'Content-Type': 'text/plain' });
      res.end('No token provided');
    }
  
    let token = req.headers.authorization.split(' ')[1];
  
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if(err) {
        res.writeHead(400, {'Content-Type': 'text/plain' });
        res.end(err.message);
      }

      if(!user) {
        res.writeHead(400, {'Content-Type': 'text/plain' });
        res.end('Invalid token');
      }
      
      if(role !== parseInt(user.id_role)) {
        res.writeHead(400, {'Content-Type': 'text/plain' });
        res.end('Insufficient permission');
      }
  
      if(validateRole(user.id_role) < 0 )  {
        res.writeHead(400, {'Content-Type': 'text/plain' });
        res.end("Do not have role");
      }
    
      cb(req, res);
    });
  });
}
