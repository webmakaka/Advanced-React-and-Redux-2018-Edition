const Authentication = require('./controllers/authentication.js');
const passportServer = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there'});
  });
  app.post('/signup', Authentication.signup);
};