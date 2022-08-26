import mongo from 'mongoose';
const { Schema, model } = mongo;
// import { characterModel } from './characterSchema.js';

export const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  createAt: { type: Date, default: Date.now() }
  // characters: { type: [characterModel], required: true }
});

export const userModel = model('User', userSchema);
