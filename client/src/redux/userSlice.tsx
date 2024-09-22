// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define interface for User
// interface User {
//   id: string;
//   name: string;
//   mobile: string;
//   email: string;
//   role: string;
//   status: 'Active' | 'Inactive';
// }

// // Define state interface
// interface UsersState {
//   users: User[];
//   loading: boolean;
//   error: string | null;
// }

// // Initial state
// const initialState: UsersState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// // Async thunk to fetch users
// export const fetchUsers = createAsyncThunk<User[]>(
//   'users/fetchUsers',
//   async () => {
//     const response = await fetch('http://localhost:5000/api/users');
//     if (!response.ok) throw new Error('Failed to fetch users');
//     return await response.json();
//   }
// );

// // Async thunk to add a new user
// export const addUserAsync = createAsyncThunk<User, Omit<User, 'id'>>(
//   'users/addUser',
//   async (newUser, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newUser),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         return rejectWithValue(errorData.message || 'Failed to add user');
//       }
//       return await response.json();
//     } catch (error: any) {
//       return rejectWithValue(error.message || 'Failed to add user');
//     }
//   }
// );

// // Async thunk to update a user
// export const updateUserAsync = createAsyncThunk<User, User>(
//   'users/updateUser',
//   async (updatedUser) => {
//     const response = await fetch(`http://localhost:5000/api/users/${updatedUser.id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedUser),
//     });
//     if (!response.ok) throw new Error('Failed to update user');
//     return await response.json();
//   }
// );

// // Async thunk to delete a user
// export const deleteUserAsync = createAsyncThunk<string, string>(
//   'users/deleteUser',
//   async (userId) => {
//     const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) throw new Error('Failed to delete user');
//     return userId; // Return the ID of the deleted user
//   }
// );

// // Create the slice
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch users';
//       })
//       .addCase(addUserAsync.fulfilled, (state, action) => {
//         state.users.push(action.payload);
//       })
//       .addCase(updateUserAsync.fulfilled, (state, action) => {
//         const index = state.users.findIndex((user) => user.id === action.payload.id);
//         if (index !== -1) {
//           state.users[index] = action.payload;
//         }
//       })
//       .addCase(deleteUserAsync.fulfilled, (state, action) => {
//         state.users = state.users.filter((user) => user.id !== action.payload);
//       });
//   },
// });

// // Export the reducer
// export default usersSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  mobile: string;
  email: string;
  role: string;
  status: string;
}

interface UsersState {
  users: User[];
  singleUser: User | null;
}

const initialState: UsersState = {
  users: [],
  singleUser: null,
};

// Fetch all users
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  const response = await fetch('http://localhost:5000/api/users');
  return await response.json();
});

// Fetch single user
export const fetchSingleUser = createAsyncThunk<User, string>('users/fetchSingleUser', async (id) => {
  const response = await fetch(`http://localhost:5000/api/users/${id}`);
  return await response.json();
});

// Add a user
export const addUserAsync = createAsyncThunk<User, Partial<User>>('users/addUser', async (newUser) => {
  const response = await fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
  return await response.json();
});

// Update a user
export const updateUserAsync = createAsyncThunk<User, Partial<User>>('users/updateUser', async (updatedUser) => {
  const response = await fetch(`http://localhost:5000/api/users/${updatedUser.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  });
  return await response.json();
});

// Delete a user
export const deleteUserAsync = createAsyncThunk<string, string>('users/deleteUser', async (id) => {
  await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
  return id;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      state.singleUser = action.payload;
    });
    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
  },
});

export default usersSlice.reducer;
