const API_URL = 'https://taskflow-project-steel.vercel.app/api/v1/tasks';

async function getTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener las tareas');
  return res.json();
}

async function createTask(titulo, prioridad, dueDate) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, prioridad, dueDate }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || 'Error al crear la tarea');
  }
  return res.json();
}

async function eliminarTarea(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar la tarea');
}

export { getTasks, createTask, eliminarTarea };