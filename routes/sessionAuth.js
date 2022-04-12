import { Router } from 'express';
import session from 'express-session';

const sessionAuth = Router();

const sess = {
  secret: '12345',
  cookie: {}
};

sessionAuth.use(session(sess));

sessionAuth.get('/login', (req, res) => {
  req.session.user = { name: 'Krupa' };
  res.send('You are logged in');
});

sessionAuth.get('/secret', (req, res) => {
  return req.session.user ? res.send(`Welcome back ${req.session.user.name}`) : res.sendStatus(403);
});

sessionAuth.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    res.send('You are logged out');
  });
});

sessionAuth.get('/you-ve-been-hacked', (req, res) => {
  // Transfer all your money hehe
  return req.session.user ? res.send(`You've been hacked`) : res.sendStatus(403);
});

export default sessionAuth;
