/* MIDDLEWARE TO VERIFY TOKEN INTO HEADERS REQUEST */
const verifyToken = (request, response, next) => {
  const bearer = request.headers['x-auth'];
  if (typeof bearer !== 'undefined') {
    const token = bearer.split(' ')[1];
    request.token = token;
    next();
  } else {
    response.sendStatus(403);
  }
};

module.exports = verifyToken;
