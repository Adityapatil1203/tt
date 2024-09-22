import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateRoleAsync } from '../redux/rolesSlice';

interface EditRoleProps {
  roleId: string;
  setEditingRoleId: (id: string | null) => void;
}

const EditRole: React.FC<EditRoleProps> = ({ roleId, setEditingRoleId }) => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) =>
    state.roles.roles.find((r) => r.id === roleId)
  );

  const [roleName, setRoleName] = useState(role?.roleName || '');
  const [status, setStatus] = useState(role?.status || 'Active');

  useEffect(() => {
    if (role) {
      setRoleName(role.roleName);
      setStatus(role.status);
    }
  }, [role]);

  const handleSave = () => {
    if (role) {
      dispatch(updateRoleAsync({ ...role, roleName, status }));
      setEditingRoleId(null);
    }
  };

  return (
    <div>
      <h3>Edit Role</h3>
      <input
        type="text"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditRole;
