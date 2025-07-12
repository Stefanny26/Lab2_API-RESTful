import React, { useEffect, useState } from 'react';
import {
  getLaboratorios,
  createLaboratorio,
  updateLaboratorio,
  deleteLaboratorio
} from '../api/api';

export default function LaboratorioList() {
  const [laboratorios, setLaboratorios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchLaboratorios = async () => {
    const res = await getLaboratorios();
    setLaboratorios(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateLaboratorio(editId, { nombre, ubicacion });
    } else {
      await createLaboratorio({ nombre, ubicacion });
    }
    setNombre('');
    setUbicacion('');
    setEditId(null);
    fetchLaboratorios();
  };

  const handleEdit = (lab) => {
    setNombre(lab.nombre);
    setUbicacion(lab.ubicacion);
    setEditId(lab._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este laboratorio?')) {
      await deleteLaboratorio(id);
      fetchLaboratorios();
      if (editId === id) setEditId(null);
    }
  };

  useEffect(() => {
    fetchLaboratorios();
  }, []);

  return (
    <div>
      <h2>Laboratorios</h2>
      <form className="laboratorio-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del laboratorio"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={ubicacion}
          onChange={e => setUbicacion(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setNombre('');
              setUbicacion('');
              setEditId(null);
            }}
          >
            Cancelar
          </button>
        )}
      </form>
      <ul className="laboratorio-list">
        {laboratorios.map(lab => (
          <li key={lab._id}>
            <strong>{lab.nombre}</strong> — {lab.ubicacion}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              <button className="btn edit" onClick={() => handleEdit(lab)}>Editar</button>
              <button className="btn delete" onClick={() => handleDelete(lab._id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}