import React, { useEffect, useState } from 'react';
import { getEquipos, createEquipo, updateEquipo, deleteEquipo, getLaboratorios } from '../api/api';

export default function EquipoList() {
  const [equipos, setEquipos] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('disponible');
  const [laboratorio, setLaboratorio] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchEquipos = async () => {
    const res = await getEquipos();
    setEquipos(res.data);
  };

  const fetchLaboratorios = async () => {
    const res = await getLaboratorios();
    setLaboratorios(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateEquipo(editId, { tipo, estado, laboratorio });
    } else {
      await createEquipo({ tipo, estado, laboratorio });
    }
    setTipo('');
    setEstado('disponible');
    setLaboratorio('');
    setEditId(null);
    fetchEquipos();
  };

  const handleEdit = (equipo) => {
    setTipo(equipo.tipo);
    setEstado(equipo.estado);
    setLaboratorio(equipo.laboratorio?._id || equipo.laboratorio);
    setEditId(equipo._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este equipo?')) {
      await deleteEquipo(id);
      fetchEquipos();
      if (editId === id) setEditId(null);
    }
  };

  useEffect(() => {
    fetchEquipos();
    fetchLaboratorios();
  }, []);

  return (
    <div>
      <h2>Equipos</h2>
      <form className="equipo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tipo de equipo"
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          required
        />
        <select
          value={estado}
          onChange={e => setEstado(e.target.value)}
          required
        >
          <option value="disponible">Disponible</option>
          <option value="ocupado">Ocupado</option>
          <option value="dañado">Dañado</option>
        </select>
        <select
          value={laboratorio}
          onChange={e => setLaboratorio(e.target.value)}
          required
        >
          <option value="">Selecciona laboratorio</option>
          {laboratorios.map(lab => (
            <option key={lab._id} value={lab._id}>
              {lab.nombre} — {lab.ubicacion}
            </option>
          ))}
        </select>
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
        {editId && (
          <button type="button" onClick={() => {
            setTipo('');
            setEstado('disponible');
            setLaboratorio('');
            setEditId(null);
          }}>
            Cancelar
          </button>
        )}
      </form>
      <ul className="equipo-list">
        {equipos.map(eq => (
          <li key={eq._id}>
            <strong>{eq.tipo}</strong> — {eq.estado} — {eq.laboratorio?.nombre || 'Sin laboratorio'}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              <button className="btn edit" onClick={() => handleEdit(eq)}>Editar</button>
              <button className="btn delete" onClick={() => handleDelete(eq._id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}