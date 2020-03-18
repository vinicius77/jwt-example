const jwt = require('jsonwebtoken');

/*  P O S T     C O N T R O L L E R  */
exports.getPosts = (request, response) => {
  response.status(200).json({ message: 'Request Successfuly Done!' });
};

exports.createPost = (request, response) => {
  jwt.verify(request.token, 'secretKey', (error, data) => {
    if (error) {
      response.sendStatus(403);
    } else {
      response.status(200).json({ message: 'Post Created', data });
    }
  });
};
