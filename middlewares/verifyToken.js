import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = (req, res, next) => {
  const {
    headers: { authorization }
  } = req;
  if (!authorization) throw new ErrorResponse('Please login', 403);
  const payload = jwt.verify(authorization, process.env.JWT_SECRET);
  req.user = payload.name;
  next();
};

export default verifyToken;
