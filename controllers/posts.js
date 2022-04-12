import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Post from '../models/Post.js';

export const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.json(posts);
});

export const createPost = asyncHandler(async (req, res) => {
  const { body } = req;
  const newPost = await Post.create(body);
  res.status(201).json(newPost);
});

export const getSinglePost = asyncHandler(async (req, res) => {
  const {
    params: { id }
  } = req;
  const post = await Post.findById(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  res.send(post);
});

export const updatePost = asyncHandler(async (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  const updatedPost = await Post.findOneAndUpdate({ _id: id }, body, { new: true });
  if (!updatedPost) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  res.json(updatedPost);
});

export const deletePost = asyncHandler(async (req, res) => {
  const {
    params: { id }
  } = req;
  const deleted = await Post.findByIdAndDelete(id);
  if (!deleted) throw new ErrorResponse(`Post with id of ${id} doesn't exist`, 404);
  res.json({ success: `Post with id of ${id} was deleted` });
});
