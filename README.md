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

# ⬡ TaskFlow

Aplicación web de gestión de tareas construida como proyecto de bootcamp.
Permite añadir, organizar, completar y eliminar tareas con persistencia
en el navegador y una interfaz moderna con modo oscuro.

## 🚀 Demo

> https://taskflow-project-steel.vercel.app

## ✨ Funcionalidades

- Añadir tareas con título, prioridad y fecha límite opcional
- Marcar tareas como completadas
- Eliminar tareas con animación
- Editar el título de una tarea inline
- Filtrar tareas: todas, pendientes y completadas
- Buscar tareas por texto en tiempo real
- Ordenar tareas por fecha, prioridad o título
- Marcar todas las tareas como completadas
- Borrar todas las tareas completadas
- Panel de estadísticas con total, completadas, pendientes,
  completadas hoy y desglose por prioridad
- Barra de progreso animada
- Contador de caracteres en el formulario
- Modo oscuro con preferencia guardada
- Persistencia completa con localStorage
- Diseño responsive para móvil y escritorio

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con variables, Flexbox y Grid
- JavaScript vanilla (ES6+)
- LocalStorage para persistencia
- Vercel para despliegue

## 📁 Estructura del proyecto
```
taskflow-project/
├── index.html          # Estructura semántica
├── style.css           # Estilos y diseño responsive
├── app.js              # Lógica de la aplicación
├── README.md
├── .gitignore
└── docs/
    ├── design/         # Wireframe del proyecto
    └── ai/             # Documentación del uso de IA
        ├── ai-comparison.md
        ├── cursor-workflow.md
        ├── mcp-setup.md
        ├── prompt-engineering.md
        ├── experiments.md
        └── reflection.md
```

## 💻 Cómo ejecutarlo en local

1. Clona el repositorio:
```bash
   git clone https://github.com/Guille-alonso14/taskflow-project.git
   cd taskflow-project
```
2. Abre `index.html` con Live Server en VS Code
3. No requiere dependencias ni servidor

## 📖 Ejemplos de uso

**Añadir una tarea:**
1. Escribe el título en el campo "Nueva tarea"
2. Selecciona la prioridad (alta, normal o baja)
3. Opcionalmente añade una fecha límite
4. Pulsa "+ Añadir"

**Filtrar tareas:**
Usa los botones "Todas", "Pendientes" o "Completadas"
para filtrar la lista.

**Buscar tareas:**
Escribe en el campo de búsqueda para filtrar
por texto en tiempo real.

**Modo oscuro:**
Pulsa el botón ☽ en la cabecera para activarlo.
Tu preferencia se guarda automáticamente.

## 🧪 Testing manual

| Prueba | Resultado |
|---|---|
| App con lista vacía | ✅ Muestra estado vacío |
| Añadir tarea sin título | ✅ Muestra error de validación |
| Tarea con título muy largo | ✅ Se muestra correctamente |
| Marcar tareas completadas | ✅ Actualiza estadísticas |
| Eliminar tareas | ✅ Animación correcta |
| Recargar página | ✅ Datos persisten |
| Navegación por teclado | ✅ Totalmente accesible |