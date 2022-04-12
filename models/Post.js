import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'] },
  author: { type: String, required: [true, 'Author is required'] },
  body: { type: String, required: [true, 'Body is required'] },
  date: { type: Date, default: Date.now }
});

export default model('Post', postSchema);
