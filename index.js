import './db/index.js';
import express from 'express';
import morgan from 'morgan';
import postsRouter from './routes/postsRouter.js';
import authRouter from './routes/authRouter.js';
import errorHandler from './middlewares/errorHandler.js';
//import sessionAuth from './routes/sessionAuth.js';

const app = express();
const port = process.env.PORT || 5000;

process.env.NODE_ENV !== 'production' && app.use(morgan('tiny'));

app.use(express.json());
//app.use('/session-auth', sessionAuth);
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
