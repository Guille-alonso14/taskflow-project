/**
 * TaskFlow — app.js
 * Gestión de tareas con LocalStorage, filtros, búsqueda y más.
 */

'use strict';

// ============================================================
// ESTADO DE LA APP
// ============================================================
let tasks        = [];
let currentFilter = 'todas';
let searchQuery  = '';

// ============================================================
// HELPERS
// ============================================================
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

// ============================================================
// LOCALSTORAGE
// ============================================================
const storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function saveTasks() {
  storage.set('taskflow_tasks', tasks);
}

function loadTasks() {
  tasks = storage.get('taskflow_tasks', []);
}

function saveDarkMode(enabled) {
  storage.set('taskflow_dark', Boolean(enabled));
}

function loadDarkMode() {
  return storage.get('taskflow_dark', false) === true;
}

// ============================================================
// LÓGICA DE TAREAS
// ============================================================


/**
 * Crea un nuevo objeto tarea.
 * 
 * @param {string} title - El título de la tarea.
 * @param {string} [priority='normal'] - Nivel de prioridad de la tarea.
 * @returns {{ id: string, title: string, completed: boolean, createdAt: string, priority: string }} Objeto tarea.
 */
function createTask(title, priority = 'normal') {
  return {
    id:        generateId(),
    title:     title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
    priority,
  };
}

function addTask(title, priority) {
  const task = createTask(title, priority);
  tasks.unshift(task);
  saveTasks();
  renderAll();
  return task;
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderAll();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderAll();
  }
}

function editTask(id, newTitle) {
  const task = tasks.find(t => t.id === id);
  if (task && newTitle.trim()) {
    task.title = newTitle.trim();
    saveTasks();
    renderAll();
  }
}

function completeAll() {
  const filtered = getFilteredTasks();
  const allDone  = filtered.every(t => t.completed);
  filtered.forEach(t => { t.completed = !allDone; });
  saveTasks();
  renderAll();
}

function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  saveTasks();
  renderAll();
}

// ============================================================
// FILTRADO Y BÚSQUEDA
// ============================================================
function getFilteredTasks() {
  let result = tasks;

  if (currentFilter === 'pendientes')  result = result.filter(t => !t.completed);
  if (currentFilter === 'completadas') result = result.filter(t => t.completed);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    result = result.filter(t => t.title.toLowerCase().includes(q));
  }

  return result;
}

// ============================================================
// RENDER
// ============================================================
const taskList    = document.getElementById('task-list');
const emptyState  = document.getElementById('empty-state');
const taskCount   = document.getElementById('task-count');
const template    = document.getElementById('task-template');

function renderTaskItem(task) {
  const clone = template.content.cloneNode(true);
  const li    = clone.querySelector('.task-item');

  li.dataset.id = task.id;
  if (task.completed) li.classList.add('completed');

  // Prioridad en borde izquierdo
  li.style.borderLeftColor = task.priority === 'alta'   ? 'var(--alta-color)'
                           : task.priority === 'baja'   ? 'var(--baja-color)'
                           : 'var(--normal-color)';
  li.style.borderLeftWidth = '4px';

  // Check
  const check = li.querySelector('.task-check');
  check.setAttribute('aria-label', task.completed ? 'Marcar como pendiente' : 'Marcar como completada');
  if (task.completed) check.setAttribute('aria-pressed', 'true');

  // Título
  li.querySelector('.task-title').textContent = task.title;

  // Meta
  li.querySelector('.task-meta').textContent = formatDate(task.createdAt);

  // Badge prioridad
  const badge = li.querySelector('.task-priority-badge');
  const labels = { alta: '↑ Alta', normal: 'Normal', baja: '↓ Baja' };
  badge.textContent = labels[task.priority] || task.priority;
  badge.classList.add('badge-' + task.priority);

  // Botón editar
  li.querySelector('.task-edit').dataset.id    = task.id;
  // Botón eliminar
  li.querySelector('.task-delete').dataset.id  = task.id;
  // Botón check
  check.dataset.id = task.id;

  return li;
}

function renderTaskList() {
  const filtered = getFilteredTasks();
  taskList.innerHTML = '';

  filtered.forEach(task => {
    taskList.appendChild(renderTaskItem(task));
  });

  // Vacío
  if (filtered.length === 0) {
    emptyState.classList.add('visible');
  } else {
    emptyState.classList.remove('visible');
  }

  taskCount.textContent = filtered.length;
}

function renderStats() {
  const total = tasks.length;
  const stats = tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed += 1;
    }

    if (task.priority === 'alta')   acc.alta += 1;
    if (task.priority === 'normal') acc.normal += 1;
    if (task.priority === 'baja')   acc.baja += 1;

    return acc;
  }, { completed: 0, alta: 0, normal: 0, baja: 0 });
  const pending = total - stats.completed;
  const pct     = total > 0 ? Math.round((stats.completed / total) * 100) : 0;

  document.getElementById('stat-total').textContent     = total;
  document.getElementById('stat-completed').textContent = stats.completed;
  document.getElementById('stat-pending').textContent   = pending;
  document.getElementById('progress-pct').textContent   = pct + '%';

  const fill = document.getElementById('progress-fill');
  fill.style.width = pct + '%';

  const pb = document.querySelector('.progress-bar');
  pb.setAttribute('aria-valuenow', pct);

  document.getElementById('stat-alta').textContent   = stats.alta;
  document.getElementById('stat-normal').textContent = stats.normal;
  document.getElementById('stat-baja').textContent   = stats.baja;
}

function renderAll() {
  renderTaskList();
  renderStats();
}

// ============================================================
// INLINE EDIT
// ============================================================
function startEdit(li, taskId) {
  const titleEl = li.querySelector('.task-title');
  const current = titleEl.textContent;

  const input = document.createElement('input');
  input.type  = 'text';
  input.value = current;
  input.className = 'task-title-input';
  input.setAttribute('aria-label', 'Editar título de la tarea');
  input.maxLength = 200;

  titleEl.replaceWith(input);
  input.focus();
  input.select();

  function confirmEdit() {
    const newVal = input.value.trim();
    if (newVal && newVal !== current) {
      editTask(taskId, newVal);
    } else {
      // Restaurar si no hay cambios
      input.replaceWith(titleEl);
    }
  }

  input.addEventListener('blur',    confirmEdit);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { input.blur(); }
    if (e.key === 'Escape') { input.removeEventListener('blur', confirmEdit); input.replaceWith(titleEl); }
  });
}

// ============================================================
// EVENTOS
// ============================================================

// Formulario: añadir tarea
const form        = document.getElementById('task-form');
const taskInput   = document.getElementById('task-input');
const prioritySel = document.getElementById('task-priority');
const formError   = document.getElementById('form-error');

function validateTaskTitle(title) {
  if (!title) {
    formError.textContent = '⚠ El título no puede estar vacío.';
    taskInput.focus();
    return false;
  }

  formError.textContent = '';
  return true;
}

function handleAddTask(title, priority) {
  addTask(title, priority);
}

function resetTaskForm() {
  taskInput.value   = '';
  prioritySel.value = 'normal';
  taskInput.focus();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = taskInput.value.trim();

  if (!validateTaskTitle(title)) return;
  handleAddTask(title, prioritySel.value);
  resetTaskForm();
});

// Delegación de eventos en la lista
taskList.addEventListener('click', e => {
  const li = e.target.closest('.task-item');
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.closest('.task-check')) {
    toggleTask(id);
    return;
  }

  if (e.target.closest('.task-delete')) {
    // Animación antes de eliminar
    li.classList.add('removing');
    li.addEventListener('animationend', () => deleteTask(id), { once: true });
    return;
  }

  if (e.target.closest('.task-edit')) {
    startEdit(li, id);
    return;
  }
});

// Teclado en la lista (accesibilidad)
taskList.addEventListener('keydown', e => {
  const li = e.target.closest('.task-item');
  if (!li) return;
  const id = li.dataset.id;

  if (e.key === 'Delete' && e.target === li) {
    li.classList.add('removing');
    li.addEventListener('animationend', () => deleteTask(id), { once: true });
  }
});

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentFilter = btn.dataset.filter;
    renderTaskList();
  });
});

// Búsqueda
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderTaskList();
});

// Completar todas
document.getElementById('btn-complete-all').addEventListener('click', completeAll);

// Borrar completadas
document.getElementById('btn-clear-completed').addEventListener('click', () => {
  const n = tasks.filter(t => t.completed).length;
  if (n === 0) return;
  if (confirm(`¿Borrar ${n} tarea${n !== 1 ? 's' : ''} completada${n !== 1 ? 's' : ''}?`)) {
    clearCompleted();
  }
});

// Dark mode
const btnDark = document.getElementById('btn-dark-mode');

function applyDarkMode(enabled) {
  document.body.classList.toggle('dark', enabled);
  btnDark.setAttribute('aria-label', enabled ? 'Desactivar modo oscuro' : 'Activar modo oscuro');
  saveDarkMode(enabled);
}

btnDark.addEventListener('click', () => {
  applyDarkMode(!document.body.classList.contains('dark'));
});

// ============================================================
// INIT
// ============================================================
function init() {
  // Dark mode
  if (loadDarkMode()) {
    applyDarkMode(true);
  }

  // Tareas
  loadTasks();
  renderAll();

  // Año en footer
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

init();
