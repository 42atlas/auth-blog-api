import jwt from 'jsonwebtoken';

export const signInUser = (req, res) => {
  // Check user and password in database
  const user = { name: 'Stelios' };
  const token = jwt.sign(user, process.env.JWT_SECRET);
  res.json({ token });
};
