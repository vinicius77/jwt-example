const jwt = require('jsonwebtoken');

exports.login = (request, response) => {
  /*  M O C K    U S E R  */
  const mockUser = {
    id: 8,
    username: 'vinicius',
    email: 'vbonifacio@gmail.com'
  };

  /* SIGN IN AND SEND ALONG A TOKEN AS RESPONSE THAT WILL BE COMPARED IN CREATE POST ROUTE*/
  jwt.sign({ mockUser }, 'secretKey', { expiresIn: '30s' }, (error, token) => {
    if (error) {
      response.json({ message: error });
    } else {
      response.json({ token });
    }
  });
};
