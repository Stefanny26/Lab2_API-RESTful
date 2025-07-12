import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import UserForm from './UserForm';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás segura de eliminar este usuario?')) {
      await deleteUser(id);
      fetchUsers();
      setSelectedUser(null); // limpiar formulario si borras usuario editado
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <UserForm selectedUser={selectedUser} onUserSaved={fetchUsers} />

      <h2>Usuarios</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id} className="user-item">
            <div className="user-info">
              <span className="user-name">{user.nombre}</span>
              <span className="user-email">{user.correo}</span>
            </div>
            <div className="user-actions">
              <button className="btn edit" onClick={() => handleEdit(user)}>
                Editar
              </button>
              <button className="btn delete" onClick={() => handleDelete(user._id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
