
# Consumo de una API RESTful desde una Aplicación Frontend

**Tamaño de letra: 14**

**Nombre del estudiante:** Stefanny Mishel Hernández
**Tamaño de letra: 12**


## RESUMEN

Durante el desarrollo de esta práctica, se implementó una aplicación fullstack orientada a la gestión de usuarios, laboratorios y equipos de cómputo, donde se integró un backend basado en Node.js, Express y MongoDB (Mongoose), y un frontend interactivo desarrollado con React. La finalidad fue demostrar la capacidad de consumir una API RESTful, procesar la información y representarla visualmente en una interfaz funcional. Se realizaron operaciones CRUD completas, gestionando la información de manera dinámica y validada. El desarrollo se llevó a cabo aplicando buenas prácticas de diseño de software, organización modular y pruebas a nivel de cliente. La práctica permitió comprender de manera más profunda la interacción entre cliente y servidor, fortaleciendo la lógica de consumo de servicios REST y la integración entre tecnologías modernas.

**Palabras clave:** API RESTful, React, MongoDB


## 1. INTRODUCCIÓN

En esta práctica se abordó el consumo de una API RESTful desde una aplicación frontend, construida con React. El objetivo fue implementar una interfaz gráfica capaz de mostrar, crear, editar y eliminar información en tiempo real, mediante el uso de servicios HTTP. La aplicación fue desarrollada bajo una arquitectura cliente-servidor, estableciendo una comunicación fluida entre un backend propio (Express + MongoDB) y un frontend moderno. El ejercicio se enfocó en consolidar competencias clave como la estructuración de rutas REST, el uso de Mongoose para modelar datos, la gestión del estado en React y la comunicación con el backend mediante Axios.


## 2. OBJETIVO(S)

### 2.1 Objetivo General

Consumir una API RESTful desde una aplicación frontend React para gestionar dinámicamente datos de usuarios, laboratorios y equipos.

### 2.2 Objetivos Específicos

* Implementar operaciones CRUD completas en el frontend y backend.
* Mostrar visualmente la información recibida desde la API.
* Documentar el proceso técnico mediante evidencias y análisis.
* Validar la funcionalidad mediante pruebas visuales y estructuradas.


## 3. MARCO TEÓRICO

Una **API RESTful** permite que aplicaciones cliente puedan interactuar con un servidor mediante peticiones HTTP. REST (Representational State Transfer) define un conjunto de normas arquitectónicas para diseñar servicios web.

**React** es una biblioteca de JavaScript orientada al desarrollo de interfaces de usuario dinámicas y reactivas.
**MongoDB**, una base de datos NoSQL, permite manejar documentos en formato BSON/JSON. **Mongoose** facilita la creación de modelos de datos en MongoDB.
La combinación de estas tecnologías permite construir aplicaciones robustas, escalables y fáciles de mantener, donde el cliente y el servidor pueden evolucionar de manera independiente.


## 4. DESCRIPCIÓN DEL PROCEDIMIENTO

El proyecto fue dividido en dos partes: backend y frontend.

* **Backend (Node.js + Express + MongoDB):**

  * Modelos definidos para Usuario, Laboratorio y Equipo.
  * Rutas RESTful (`/users`, `/laboratorios`, `/equipos`) que permiten operaciones CRUD.
  * Consultas avanzadas implementadas con Mongoose y agregaciones.
  * Uso de Docker para levantar servicios MongoDB y Mongo Express.

* **Frontend (React):**

  * Proyecto creado con `create-react-app`.
  * Uso de Axios para hacer peticiones al backend.
  * Componentes visuales para mostrar, crear y modificar registros.
  * Estilos responsivos con CSS personalizado.
  * Manejo del estado mediante hooks (`useState`, `useEffect`).

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

## 5. ANÁLISIS DE RESULTADOS

La aplicación permitió realizar correctamente las operaciones básicas sobre las tres entidades:

| Entidad      | Listar | Crear | Editar | Eliminar |
| ------------ | ------ | ----- | ------ | -------- |
| Usuarios     | ✅      | ✅     | ✅      | ✅        |
| Laboratorios | ✅      | ✅     | ✅      | ✅        |
| Equipos      | ✅      | ✅     | ✅      | ✅        |

Además, se implementaron consultas avanzadas como:

* Filtrar laboratorios con equipos disponibles (`.populate()` con `match`)
* Buscar usuarios por correo institucional usando `$regex`
* Obtener el promedio de equipos por laboratorio usando `$lookup` y `$group`

Cada una fue probada desde el frontend y backend, validando tanto con Postman como en la interfaz visual.



## 6. GRÁFICOS O FOTOGRAFÍAS

**Figura 1.** Página principal mostrando usuarios.
![Usuarios](./screenshot/Front1.png)

**Figura 2.** Formulario para crear un nuevo laboratorio.
![Formulario Laboratorio](./screenshot/Front2.png)

**Figura 3.** Tabla de equipos con botón de eliminación.
![Equipos](./screenshot/Equipos.png)

**Figura 4.** Peticiones verificadas en Postman.
![Postman](./screenshot/Pruebas.png)

---

## 7. DISCUSIÓN

El desarrollo de esta aplicación permitió comprender cómo los datos se estructuran desde el backend y son consumidos por el cliente. La integración de MongoDB con Mongoose facilitó la representación de relaciones complejas como la de laboratorios con múltiples equipos. El uso de `.populate()` resultó fundamental para traer relaciones sin necesidad de múltiples peticiones. En React, se aplicaron buenas prácticas como el uso de componentes reutilizables, separación de lógica en servicios (`api.js`) y control de formularios.

Se presentaron desafíos como la conexión entre contenedores Docker y el servidor Node.js, especialmente al configurar correctamente `authSource` y la red. Otro reto fue asegurar que las relaciones en MongoDB fueran correctamente representadas en la interfaz de React, lo cual se solucionó con pruebas iterativas y refactorización del código.


## 8. CONCLUSIONES

* Se logró consumir satisfactoriamente una API RESTful desde React.
* Se consolidó el manejo de CRUD completo tanto en frontend como backend.
* Se comprendió el uso de Mongoose para representar relaciones entre colecciones.
* Se validó que la interfaz responde correctamente a cambios dinámicos.
* La experiencia permitió fortalecer la lógica de interacción cliente-servidor.

---

## 9. BIBLIOGRAFÍA

* MongoDB Inc. (2024). *MongoDB Manual*. [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
* React Team. (2024). *React Documentation*. [https://reactjs.org/](https://reactjs.org/)
* Express.js (2024). *Express Guide*. [https://expressjs.com/](https://expressjs.com/)
* Mongoose. (2024). *Mongoose ODM Documentation*. [https://mongoosejs.com/](https://mongoosejs.com/)
* Docker. (2024). *Docker Documentation*. [https://docs.docker.com/](https://docs.docker.com/)
* Mozilla Developer Network. (2024). *HTTP Requests with Fetch and Axios*. [https://developer.mozilla.org/](https://developer.mozilla.org/)
