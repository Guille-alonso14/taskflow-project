# bootcamp-project

Aplicación TaskFlow de gestión de tareas. Proyecto del bootcamp de Corner Estudios.
## Entorno configurado

VS Code, Git, GitHub y extensiones instaladas correctamente.
## Diseño de la aplicación

La app TaskFlow está dividida en estas secciones principales:

- **Cabecera** — nombre de la app y botón de modo oscuro
- **Formulario** — campo de texto para añadir nuevas tareas
- **Lista de tareas** — muestra todas las tareas con checkbox para completarlas
- **Panel de estadísticas** — muestra el total, completadas y pendientes
- **Footer** — información del proyecto

El wireframe del diseño está disponible en `docs/design/`.

> https://taskflow-project-steel.vercel.app

## Testing manual

| Prueba | Resultado |
|---|---|
| App con lista vacía | ✅ Muestra estado vacío correctamente |
| Añadir tarea sin título | ✅ Muestra error de validación |
| Tarea con título muy largo | ✅ Se muestra correctamente |
| Marcar varias tareas completadas | ✅ Actualiza estadísticas en tiempo real |
| Eliminar varias tareas | ✅ Animación y eliminación correcta |
| Recargar la página | ✅ Los datos persisten en localStorage |
| Navegación por teclado | ✅ Tab, Enter y Escape funcionan |