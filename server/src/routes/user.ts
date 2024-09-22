// import express from 'express';
// import {
//   getAllUsers,
//   getUserById,
//   addUser,
//   updateUser,
//   deleteUser,
// } from '../controller/user';

// const router = express.Router();

// // Get all users
// router.get('/users', getAllUsers);

// // Get a user by ID
// router.get('/users/:id', getUserById);

// // Add a new user
// router.post('/users', addUser);

// // Update a user
// router.put('/users/:id', updateUser);

// // Delete a user
// router.delete('/users/:id', deleteUser);

// export default router;

import { Router } from 'express';
import { getAllUsers, addUser, updateUser, deleteUser, getSingleUser } from '../controller/user';

const router = Router();

// Fetch all users
router.get('/', getAllUsers);

// Add a user
router.post('/', addUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

// Fetch single user
router.get('/:id', getSingleUser);

export default router;
