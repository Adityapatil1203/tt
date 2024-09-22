// const mongoose = require('mongoose');

// // Define the User schema
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   role: {
//     type: String,
//     required: true,
//     enum: ['Admin', 'User'], // Adjust roles as necessary
//   },
//   status: {
//     type: String,
//     required: true,
//     enum: ['Active', 'Inactive'],
//   },
// }, { timestamps: true });

// // Create the User model
// const User = mongoose.model('User', userSchema);

// module.exports = User;

import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const UserSchema = new Schema({
  id: { type: String, default: uuidv4 }, // Custom user ID using uuid
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { 
    type: String, 
    enum: ['Admin', 'Superadmin', 'Caller', 'Account'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive'], 
    required: true 
  },
  profileImage: { type: String }, // Store profile image URL or path
});

export default model('Uuser', UserSchema);
