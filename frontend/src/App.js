import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import LaboratorioList from './components/LaboratorioList';
import EquipoList from './components/EquipoList';

function App() {
  const [tab, setTab] = useState('usuarios');

  return (
    <div className="App">
      <header>
        <h1>Gestión de Usuarios, Laboratorios y Equipos</h1>
        <nav>
          <button
            className={tab === 'usuarios' ? 'active' : ''}
            onClick={() => setTab('usuarios')}
          >
            Usuarios
          </button>
          <button
            className={tab === 'laboratorios' ? 'active' : ''}
            onClick={() => setTab('laboratorios')}
          >
            Laboratorios
          </button>
          <button
            className={tab === 'equipos' ? 'active' : ''}
            onClick={() => setTab('equipos')}
          >
            Equipos
          </button>
        </nav>
      </header>
      <main className="contenedor-principal">
        {tab === 'usuarios' && <UserList />}
        {tab === 'laboratorios' && <LaboratorioList />}
        {tab === 'equipos' && <EquipoList />}
      </main>
      <footer>
        <p>© 2025 - Stefanny Hernandez</p>
      </footer>
    </div>
  );
}

export default App;
