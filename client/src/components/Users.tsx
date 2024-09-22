// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchUsers, deleteUserAsync, updateUserAsync, addUserAsync } from '../redux/userSlice';
// import { useTable } from 'react-table';

// const Users: React.FC = () => {
//   const [showAddUser, setShowAddUser] = useState<boolean>(false);
//   const [editingUser, setEditingUser] = useState<{ id: string; name: string; mobile: string; email: string; role: string; status: string } | null>(null);
//   const [newUser, setNewUser] = useState<{ name: string; mobile: string; email: string; role: string; status: string }>({
//     name: '',
//     mobile: '',
//     email: '',
//     role: 'Admin', // Default to 'Admin'
//     status: 'Active',
//   });
  
//   const dispatch = useDispatch();
//   const users = useSelector((state: RootState) => state.users.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEditClick = (user: any) => {
//     setEditingUser({ id: user.id, name: user.name, mobile: user.mobile, email: user.email, role: user.role, status: user.status });
//   };

//   const handleDeleteClick = (id: string) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       dispatch(deleteUserAsync(id));
//     }
//   };

//   const handleEditSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingUser) {
//       dispatch(updateUserAsync(editingUser));
//       setEditingUser(null);
//     }
//   };

//   const handleAddUserSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addUserAsync(newUser));
//     setNewUser({ name: '', mobile: '', email: '', role: 'Admin', status: 'Active' }); // Reset with 'Admin' as default
//     setShowAddUser(false);
//   };

//   const data = users.map((user) => ({
//     id: user.id,
//     name: user.name,
//     mobile: user.mobile,
//     email: user.email,
//     role: user.role,
//     status: user.status,
//   }));

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'ID',
//         accessor: 'id',
//       },
//       {
//         Header: 'Name',
//         accessor: 'name',
//       },
//       {
//         Header: 'Mobile',
//         accessor: 'mobile',
//       },
//       {
//         Header: 'Email',
//         accessor: 'email',
//       },
//       {
//         Header: 'Role',
//         accessor: 'role',
//       },
//       {
//         Header: 'Status',
//         accessor: 'status',
//       },
//       {
//         Header: 'Actions',
//         Cell: ({ row }: any) => (
//           <div>
//             <button
//               className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
//               onClick={() => handleEditClick(row.original)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white px-2 py-1 rounded"
//               onClick={() => handleDeleteClick(row.original.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

//   return (
//     <div>
//       {showAddUser ? (
//         <form onSubmit={handleAddUserSubmit} className="mb-4">
//           <h2 className="text-xl mb-4">Add User</h2>
//           <input
//             type="text"
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             placeholder="Name"
//             required
//             className="border p-2 mr-2"
//           />
//           <input
//             type="text"
//             value={newUser.mobile}
//             onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
//             placeholder="Mobile"
//             required
//             className="border p-2 mr-2"
//           />
//           <input
//             type="email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//             placeholder="Email"
//             required
//             className="border p-2 mr-2"
//           />
//           <select
//             value={newUser.role}
//             onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//             className="border p-2 mr-2"
//             required
//           >
//             <option value="Admin">Admin</option>
//             <option value="User">User</option>
//           </select>
//           <select
//             value={newUser.status}
//             onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
//             className="border p-2 mr-2"
//             required
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
//           <button
//             type="button"
//             onClick={() => setShowAddUser(false)}
//             className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//           >
//             Cancel
//           </button>
//         </form>
//       ) : editingUser ? (
//         <form onSubmit={handleEditSubmit} className="mb-4">
//           <input
//             type="text"
//             value={editingUser.name}
//             onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
//             placeholder="Name"
//             required
//             className="border p-2 mr-2"
//           />
//           <input
//             type="text"
//             value={editingUser.mobile}
//             onChange={(e) => setEditingUser({ ...editingUser, mobile: e.target.value })}
//             placeholder="Mobile"
//             required
//             className="border p-2 mr-2"
//           />
//           <input
//             type="email"
//             value={editingUser.email}
//             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
//             placeholder="Email"
//             required
//             className="border p-2 mr-2"
//           />
//           <select
//             value={editingUser.role}
//             onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
//             className="border p-2 mr-2"
//           >
//             <option value="Admin">Admin</option>
//             <option value="User">User</option>
//           </select>
//           <select
//             value={editingUser.status}
//             onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
//             className="border p-2 mr-2"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update User</button>
//           <button
//             type="button"
//             onClick={() => setEditingUser(null)}
//             className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//           >
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddUser(true)}
//           >
//             Add User
//           </button>
//           <table {...getTableProps()} className="table-auto w-full border-collapse">
//             <thead>
//               {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                   {headerGroup.headers.map(column => (
//                     <th {...column.getHeaderProps()} className="border px-4 py-2 text-left">
//                       {column.render('Header')}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {rows.map(row => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()} className="border">
//                     {row.cells.map(cell => (
//                       <td {...cell.getCellProps()} className="border px-4 py-2">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default Users;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUserAsync } from '../redux/userSlice';
// import { RootState } from '../redux/store';
// import { Link } from 'react-router-dom';

// const Users: React.FC = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state: RootState) => state.users.users);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [userToDelete, setUserToDelete] = useState<string | null>(null);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleDelete = (id: string) => {
//     setUserToDelete(id);
//     setDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (userToDelete) {
//       dispatch(deleteUserAsync(userToDelete));
//     }
//     setDeleteModal(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-md">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Users</h1>
//         <Link to="/add-user" className="bg-purple-700 text-white px-4 py-2 rounded">Add New</Link>
//       </div>

//       <table className="min-w-full bg-white">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Mobile</th>
//             <th className="px-4 py-2">Email</th>
//             <th className="px-4 py-2">Role</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           { users.length > 0 && users?.map((user,ind) => (
//             <tr key={ind}>
//               <td className="border px-4 py-2">{ind+1}</td>
//               <td className="border px-4 py-2">{user.name}</td>
//               <td className="border px-4 py-2">{user.mobile}</td>
//               <td className="border px-4 py-2">{user.email}</td>
//               <td className="border px-4 py-2">{user.role}</td>
//               <td className="border px-4 py-2">{user.status}</td>
//               <td className="border px-4 py-2">
//                 <Link to={`/edit-user/${user.id}`} className="text-blue-500 mr-2">Edit</Link>
//                 <button className="text-red-500" onClick={() => handleDelete(user.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {deleteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-lg font-bold text-red-600">Delete User</h2>
//             <p>Are you sure you want to delete this user?</p>
//             <div className="mt-4 flex justify-end">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setDeleteModal(false)}>Cancel</button>
//               <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={confirmDelete}>Confirm</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUserAsync } from '../redux/userSlice';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    setUserToDelete(id);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      dispatch(deleteUserAsync(userToDelete));
    }
    setDeleteModal(false);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link to="/add-user" className="bg-purple-700 text-white px-4 py-2 rounded">Add New</Link>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          { users.length > 0 && users?.map((user,ind) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{ind+1}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.mobile}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit-user/${user.id}`} className="text-blue-500 mr-2">Edit</Link>
                <button className="text-red-500" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold text-red-600">Delete User</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setDeleteModal(false)}>Cancel</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={confirmDelete}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
