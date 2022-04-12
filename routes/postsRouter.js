import { Router } from 'express';
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from '../controllers/posts.js';
import validateJOI from '../middlewares/validateJOI.js';
import { post } from '../joi/schemas.js';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(validateJOI(post), createPost);

postsRouter.route('/:id').get(getSinglePost).put(validateJOI(post), updatePost).delete(deletePost);

export default postsRouter;
