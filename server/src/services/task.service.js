let tasks = [];

function obtenerTodas() {
  return tasks;
}

function crearTarea(data) {
  const tarea = {
    id: Date.now().toString(),
    titulo: data.titulo.trim(),
    completada: false,
    prioridad: data.prioridad || 'normal',
    creadaEn: new Date().toISOString(),
  };
  tasks.push(tarea);
  return tarea;
}

function eliminarTarea(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('NOT_FOUND');
  }
  tasks.splice(index, 1);
}

module.exports = { obtenerTodas, crearTarea, eliminarTarea };