

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchRoles, deleteRoleAsync } from '../redux/rolesSlice';
// import AddRole from './AddRole';
// import EditRole from './EditRole';
// import { useTable } from 'react-table';

// const Roles: React.FC = () => {
//   const [showAddRole, setShowAddRole] = useState<boolean>(false);
//   const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
//   const dispatch = useDispatch();
//   const roles = useSelector((state: RootState) => state.roles.roles);

//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);

//   const handleEditClick = (id: string) => {
//     setEditingRoleId(id);
//   };

//   const handleDeleteClick = (id: string) => {
//     if (window.confirm('Are you sure you want to delete this role?')) {
//       dispatch(deleteRoleAsync(id));
//     }
//   };

//   // Data and columns for the table
//   const data = roles.map((role, index) => ({
//     id: index + 1, // Start from 1 and auto-increment
//     roleName: role.roleName,
//     status: role.status,
//     roleId: role.id,
//   }));

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'ID',
//         accessor: 'id', // auto-incremented ID
//       },
//       {
//         Header: 'Role Name',
//         accessor: 'roleName',
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
//               onClick={() => handleEditClick(row.original.roleId)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white px-2 py-1 rounded"
//               onClick={() => handleDeleteClick(row.original.roleId)}
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div>
//       {showAddRole ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(false)}
//           >
//             Back to Roles
//           </button>
//           <AddRole setShowAddRole={setShowAddRole} />
//         </>
//       ) : editingRoleId ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setEditingRoleId(null)}
//           >
//             Back to Roles
//           </button>
//           <EditRole roleId={editingRoleId} setEditingRoleId={setEditingRoleId} />
//         </>
//       ) : (
//         <>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(true)}
//           >
//             Add Role
//           </button>
//           <table {...getTableProps()} className="table-auto w-full border-collapse">
//             <thead>
//               {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                   {headerGroup.headers.map(column => (
//                     <th
//                       {...column.getHeaderProps()}
//                       className="border px-4 py-2 text-left"
//                     >
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

// export default Roles;



// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchRoles, deleteRoleAsync } from '../redux/rolesSlice';
// import AddRole from './AddRole';
// import EditRole from './EditRole';
// import { useTable } from 'react-table';

// const Roles: React.FC = () => {
//   const [showAddRole, setShowAddRole] = useState<boolean>(false);
//   const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
//   const dispatch = useDispatch();
//   const roles = useSelector((state: RootState) => state.roles.roles);

//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);

//   const handleEditClick = (id: string) => {
//     setEditingRoleId(id);
//   };

//   const handleDeleteClick = (id: string) => {
//     if (window.confirm('Are you sure you want to delete this role?')) {
//       dispatch(deleteRoleAsync(id));
//     }
//   };

//   // Data and columns for the table
//   const data = roles.map((role, index) => ({
//     id: index + 1, // Start from 1 and auto-increment
//     roleName: role.roleName,
//     status: role.status,
//     roleId: role.id,
//   }));

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'ID',
//         accessor: 'id', // auto-incremented ID
//       },
//       {
//         Header: 'Role Name',
//         accessor: 'roleName',
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
//               onClick={() => handleEditClick(row.original.roleId)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white px-2 py-1 rounded"
//               onClick={() => handleDeleteClick(row.original.roleId)}
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div>
//       {showAddRole ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(false)}
//           >
//             Back to Roles
//           </button>
//           <AddRole setShowAddRole={setShowAddRole} />
//         </>
//       ) : editingRoleId ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setEditingRoleId(null)}
//           >
//             Back to Roles
//           </button>
//           <EditRole roleId={editingRoleId} setEditingRoleId={setEditingRoleId} />
//         </>
//       ) : (
//         <>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(true)}
//           >
//             Add Role
//           </button>
//           <table {...getTableProps()} className="table-auto w-full border-collapse">
//             <thead>
//               {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                   {headerGroup.headers.map(column => (
//                     <th
//                       {...column.getHeaderProps()}
//                       className="border px-4 py-2 text-left"
//                     >
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

// export default Roles;



// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchRoles, deleteRoleAsync, updateRoleAsync } from '../redux/rolesSlice';
// import AddRole from './AddRole';
// import { useTable } from 'react-table';

// const Roles: React.FC = () => {
//   const [showAddRole, setShowAddRole] = useState<boolean>(false);
//   const [editingRole, setEditingRole] = useState<{ id: string; roleName: string; status: string } | null>(null);
//   const dispatch = useDispatch();
//   const roles = useSelector((state: RootState) => state.roles.roles);

//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);

//   const handleEditClick = (role: any) => {
//     setEditingRole({ id: role.roleId, roleName: role.roleName, status: role.status });
//   };

//   const handleDeleteClick = (id: string) => {
//     if (window.confirm('Are you sure you want to delete this role?')) {
//       dispatch(deleteRoleAsync(id));
//     }
//   };

//   const handleEditSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingRole) {
//       console.log("edit role ",editingRole);
//       dispatch(updateRoleAsync(editingRole));
//       setEditingRole(null); // Clear the editing role after updating
//     }
//   };

//   const data = roles.map((role, index) => ({
//     id: index + 1, // Start from 1 and auto-increment
//     roleName: role.roleName,
//     status: role.status,
//     roleId: role.id,
//   }));

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'ID',
//         accessor: 'id',
//       },
//       {
//         Header: 'Role Name',
//         accessor: 'roleName',
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
//               onClick={() => handleDeleteClick(row.original.roleId)}
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
//       {showAddRole ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(false)}
//           >
//             Back to Roles
//           </button>
//           <AddRole setShowAddRole={setShowAddRole} />
//         </>
//       ) : editingRole ? (
//         <form onSubmit={handleEditSubmit} className="mb-4">
//           <input
//             type="text"
//             value={editingRole.roleName}
//             onChange={(e) => setEditingRole({ ...editingRole, roleName: e.target.value })}
//             placeholder="Role Name"
//             required
//             className="border p-2 mr-2"
//           />
//           <select
//             value={editingRole.status}
//             onChange={(e) => setEditingRole({ ...editingRole, status: e.target.value })}
//             className="border p-2 mr-2"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Role</button>
//           <button
//             type="button"
//             onClick={() => setEditingRole(null)}
//             className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//           >
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(true)}
//           >
//             Add Role
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

// export default Roles;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchRoles, deleteRoleAsync, updateRoleAsync } from '../redux/rolesSlice';
import AddRole from './AddRole';
import { useTable } from 'react-table';

const Roles: React.FC = () => {
  const [showAddRole, setShowAddRole] = useState<boolean>(false);
  const [editingRole, setEditingRole] = useState<{ id: string; roleName: string; status: string } | null>(null);
  const dispatch = useDispatch();
  const roles = useSelector((state: RootState) => state.roles.roles);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handleEditClick = (role: any) => {
    setEditingRole({ id: role.roleId, roleName: role.roleName, status: role.status });
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      dispatch(deleteRoleAsync(id));
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRole) {
      console.log("edit role ",editingRole);
      dispatch(updateRoleAsync(editingRole));
      setEditingRole(null); // Clear the editing role after updating
    }
  };

  const data = roles.map((role, index) => ({
    id: index + 1, // Start from 1 and auto-increment
    roleName: role.roleName,
    status: role.status,
    roleId: role.id,
  }));

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Role Name',
        accessor: 'roleName',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Actions',
        Cell: ({ row }: any) => (
          <div>
            <button
              className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
              onClick={() => handleEditClick(row.original)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteClick(row.original.roleId)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div>
      {showAddRole ? (
        <>
          <button
            className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
            onClick={() => setShowAddRole(false)}
          >
            Back to Roles
          </button>
          <AddRole setShowAddRole={setShowAddRole} />
        </>
      ) : editingRole ? (
        <form onSubmit={handleEditSubmit} className="mb-4">
          <input
            type="text"
            value={editingRole.roleName}
            onChange={(e) => setEditingRole({ ...editingRole, roleName: e.target.value })}
            placeholder="Role Name"
            required
            className="border p-2 mr-2"
          />
          <select
            value={editingRole.status}
            onChange={(e) => setEditingRole({ ...editingRole, status: e.target.value })}
            className="border p-2 mr-2"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Role</button>
          <button
            type="button"
            onClick={() => setEditingRole(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <button
            className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
            onClick={() => setShowAddRole(true)}
          >
            Add Role
          </button>
          <table {...getTableProps()} className="table-auto w-full border-collapse">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="border px-4 py-2 text-left">
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="border px-4 py-2">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Roles;
