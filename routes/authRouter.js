import { Router } from 'express';
import { getUser, signInUser, signUpUser } from '../controllers/auth.js';
import verifyToken from '../middlewares/verifyToken.js';

const authRouter = Router();

authRouter.post('/signup', signUpUser);
authRouter.post('/signin', signInUser);
authRouter.get('/me', verifyToken, getUser);

export default authRouter;
