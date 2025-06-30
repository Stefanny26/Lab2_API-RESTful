# Proyecto: Gestión de Usuarios, Laboratorios y Equipos

## Descripción

Este proyecto consiste en una aplicación **fullstack** que permite gestionar usuarios, laboratorios y equipos, consumiendo una API RESTful local desarrollada con Node.js, Express y MongoDB (Mongoose), y un frontend en React.

---

## Objetivos

- ✅ Consumir una API RESTful pública o local desde una aplicación frontend.
- ✅ Mostrar datos recibidos de la API en una interfaz gráfica.
- ✅ Implementar operaciones básicas como listar, crear, actualizar y eliminar registros (CRUD).
- ✅ Documentar el proceso y resultados en un informe técnico.

---

## Estructura del Proyecto

- **Backend:**  
  - Node.js, Express, Mongoose  
  - Modelos: Usuario, Laboratorio, Equipo  
  - Rutas: `/users`, `/laboratorios`, `/equipos`  
  - CRUD completo para cada entidad  
  - Conexión a MongoDB (ver `.env` para configuración)

- **Frontend:**  
  - React  
  - Consumo de la API con Axios  
  - Componentes para listar, crear, editar y eliminar usuarios, laboratorios y equipos  
  - Interfaz moderna y responsiva

---

## Instalación y Ejecución

### Backend

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Configura el archivo `.env`:
   ```
   PORT=3001
   MONGO_URI=mongodb://admin:admin123@localhost:27018/?authSource=admin
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```

### Frontend

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Asegúrate de que el archivo `src/api/api.js` tenga el mismo puerto que el backend:
   ```js
   baseURL: 'http://localhost:3001'
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```

---

## Uso

- Navega entre Usuarios, Laboratorios y Equipos usando el menú superior.
- Puedes **crear, editar y eliminar** registros en cada sección.
- Los datos se actualizan automáticamente tras cada operación.

---

## Resultados

- La aplicación permite gestionar y visualizar usuarios, laboratorios y equipos de manera sencilla.
- Todas las operaciones CRUD funcionan correctamente y los datos se muestran en tiempo real.
- El diseño es moderno y responsivo.

---

## Notas Técnicas

- El backend y el frontend deben correr en **puertos diferentes** (por ejemplo, 3001 y 3000).
- La conexión a MongoDB debe estar activa y configurada en el archivo `.env`.
- El frontend consume la API usando Axios y muestra los datos en componentes React.

---

## Autor

Stefanny Hernandez  
2025
