const taskService = require('../services/task.service');

function getTasks(req, res, next) {
  try {
    const tasks = taskService.obtenerTodas();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
}

function createTask(req, res, next) {
  try {
    const { titulo, prioridad } = req.body;

    if (!titulo || typeof titulo !== 'string' || titulo.trim().length < 3) {
      return res.status(400).json({ error: 'El título es obligatorio y debe tener al menos 3 caracteres.' });
    }

    const tarea = taskService.crearTarea({ titulo, prioridad });
    res.status(201).json(tarea);
  } catch (err) {
    next(err);
  }
}

function deleteTask(req, res, next) {
  try {
    taskService.eliminarTarea(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { getTasks, createTask, deleteTask };