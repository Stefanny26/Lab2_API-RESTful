import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

// Usuarios
export const getUsers = () => api.get('/users');
export const createUser = (user) => api.post('/users', user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Laboratorios
export const getLaboratorios = () => api.get('/laboratorios');
export const createLaboratorio = (lab) => api.post('/laboratorios', lab);
export const updateLaboratorio = (id, lab) => api.put(`/laboratorios/${id}`, lab);
export const deleteLaboratorio = (id) => api.delete(`/laboratorios/${id}`);

// Equipos
export const getEquipos = () => api.get('/equipos');
export const createEquipo = (equipo) => api.post('/equipos', equipo);
export const updateEquipo = (id, equipo) => api.put(`/equipos/${id}`, equipo);
export const deleteEquipo = (id) => api.delete(`/equipos/${id}`);

