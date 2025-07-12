import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api/api';

export default function UserForm({ selectedUser, onUserSaved }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setNombre(selectedUser.nombre);
      setCorreo(selectedUser.correo);
    } else {
      setNombre('');
      setCorreo('');
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        await updateUser(selectedUser._id, { nombre, correo });
      } else {
        await createUser({ nombre, correo });
      }
      setNombre('');
      setCorreo('');
      onUserSaved();
    } catch (err) {
      console.error('Error al guardar usuario:', err);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>{selectedUser ? 'Editar Usuario' : 'Crear Usuario'}</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <button type="submit">{selectedUser ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}
