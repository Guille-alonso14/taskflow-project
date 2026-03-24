# Flujo de trabajo con Cursor

En este documento se recoge la experiencia usando Cursor como IDE
asistido por IA. Se documentan atajos de teclado, ejemplos de mejora
de código y comparativa con otros asistentes.

## Atajos de teclado más usados

- **Ctrl + L** — Abrir chat contextual
- **Ctrl + K** — Edición inline con IA
- **Ctrl + F** — Buscar en el archivo
- **Ctrl + S** — Guardar archivo

## Ejemplo 1: JSDoc con edición inline

Usé Ctrl + K encima de la función createTask y pedí
añadir un comentario JSDoc. Cursor generó automáticamente
los tipos de parámetros y el tipo de retorno correctamente.

## Ejemplo 2: Refactorizaciones con Cursor

### Refactorizaciones realizadas en app.js

1. **Storage wrapper** — saveTasks, loadTasks, saveDarkMode y loadDarkMode
   unificadas en un objeto storage.get/storage.set centralizado.

2. **renderStats** — reemplazados múltiples filter por un único reduce
   que calcula todos los contadores en una sola pasada.

3. **Formulario** — extraídas las funciones validateTaskTitle,
   handleAddTask y resetTaskForm del handler de submit.

4. **taskList handler** — reemplazados múltiples if por un mapa
   de handlers por acción más extensible.

Todas las refactorizaciones fueron revisadas manualmente
y probadas con Live Server antes de hacer commit.