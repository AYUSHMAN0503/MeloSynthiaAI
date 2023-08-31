const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config');


function authenticateUser(req, res, next) {
  const { cookie } = req.headers;

  if (!cookie) {
    console.log("No cookie found");
    return res.status(403).send({
      message: 'User not authenticated',
      success: false
    });
  }
  const { authToken } = parseCookies(cookie);

  jwt.verify(authToken, jwt_secret, (err, user) => {
    if (err) {
      console.log("Error in authenticating user: ", err);
      return res.status(403).send({
        message: 'User not authenticated',
        success: false
      });
    }
    console.log("User authenticated successfully: ", { userId: user.id });
    req.user = user;
    next();
  });
}

function parseCookies(cookieHeader) {
  return cookieHeader.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.trim().split('=');
    cookies[name] = value;
    return cookies;
  }, {});
}



exports.authenticateUser = authenticateUser;