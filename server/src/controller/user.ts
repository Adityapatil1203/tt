// import { Request, Response } from 'express';
// import User from '../models/User'; // Make sure to import the User model

// // Get all users
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: 'Failed to fetch users', error: error.message });
//     } else {
//       res.status(500).json({ message: 'Failed to fetch users', error: String(error) });
//     }
//   }
// };

// // Get a user by ID
// export const getUserById = async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: 'Error fetching user', error: error.message });
//     } else {
//       res.status(500).json({ message: 'Error fetching user', error: String(error) });
//     }
//   }
// };

// // Add a new user
// export const addUser = async (req: Request, res: Response) => {
//   const { name, mobile, email, role, status } = req.body;

//   if (!name || !mobile || !email || !role || !status) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const newUser = new User({ name, mobile, email, role, status });

//   try {
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: 'Failed to create user', error: error.message });
//     } else {
//       res.status(500).json({ message: 'Failed to create user', error: String(error) });
//     }
//   }
// };

// // Update a user
// export const updateUser = async (req: Request, res: Response) => {
//   const { name, mobile, email, role, status } = req.body;

//   if (!name || !mobile || !email || !role || !status) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, { name, mobile, email, role, status }, { new: true });
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: 'Error updating user', error: error.message });
//     } else {
//       res.status(500).json({ message: 'Error updating user', error: String(error) });
//     }
//   }
// };

// // Delete a user
// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (user) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: 'Error deleting user', error: error.message });
//     } else {
//       res.status(500).json({ message: 'Error deleting user', error: String(error) });
//     }
//   }
// };
import { Request, Response } from 'express';
import Uuser from '../models/UserRole';

// Fetch all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await Uuser.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Add a user
export const addUser = async (req: Request, res: Response) => {
  const { name, mobile, email, role, status } = req.body;

  console.log(name, mobile, email, role, status);

  try {
    const newUser = new Uuser({ name, mobile, email, role, status });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { name, mobile, email, role, status } = req.body;

  try {
    // Update user by the custom "id" field, not MongoDB's _id
    const updatedUser = await Uuser.findOneAndUpdate(
      { id: req.params.id },
      { name, mobile, email, role, status },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // Delete user by custom "id" field, not MongoDB's _id
    const deletedUser = await Uuser.findOneAndDelete({ id: req.params.id });

    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

// Fetch single user
export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Find user by the custom "id" field
    const user = await Uuser.findOne({ id });

    // Check if the user exists
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Return user if found
    res.status(200).json(user);
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error fetching user:', error);

    // Send a 500 error response with a more informative message
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};
