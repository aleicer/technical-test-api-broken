# Prueba Técnica - Backend Junior (Node.js + TypeScript)

Bienvenido a la prueba técnica. Hemos creado una pequeña API para gestionar tareas un (CRUD) completo, pero el desarrollador anterior cometió varios errores y dejó el código incompleto y con bugs.

## Tu Misión

Tu objetivo es identificar y corregir los errores para que la API funcione correctamente según los requerimientos.

### Requerimientos Funcionales
1.  **GET /api/tasks**: Debe devolver la lista de tareas almacenada en `database.json`.
2.  **GET /api/tasks/:id**: Debe devolver una tarea específica por su ID.
3.  **POST /api/tasks**: Debe permitir crear una nueva tarea.
    *   Debe validar que el `title` sea obligatorio.
    *   Debe asignar un `id` único automáticamente.
    *   Debe guardar la nueva tarea en `database.json`.
4.  **PUT /api/tasks/:id**: Debe permitir actualizar una tarea existente.
5.  **DELETE /api/tasks/:id**: Debe permitir eliminar una tarea por su ID.

### Instrucciones de Instalación
1.  Instala las dependencias:
    ```bash
    npm install
    ```
2.  Ejecuta el servidor:
    ```bash
    npm start
    ```
    Para desarrollo con recarga automática (hot-reloading):
    ```bash
    npm run dev
    ```
3.  Prueba los endpoints usando Postman, Insomnia o cURL.

### Pistas
*   Hay errores de **Tipado** (TypeScript).
*   Hay errores de **Lógica** (El código compila pero no hace lo que debe).
*   Hay errores de **Buenas Prácticas** (Códigos de estado HTTP, estructura de respuesta).

¡Buena suerte!
