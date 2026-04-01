const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const taskRoutes = require('./routes/task.routes');

const app = express();

// Middlewares globales
app.use(cors({
  origin: 'https://taskflow-project-steel.vercel.app'
}));
app.use(express.json());

// Logger de peticiones
const logger = (req, res, next) => {
  const inicio = performance.now();
  res.on('finish', () => {
    const duracion = performance.now() - inicio;
    console.log(`[${req.method}] ${req.originalUrl} - ${res.statusCode} (${duracion.toFixed(2)}ms)`);
  });
  next();
};

app.use(logger);

// Rutas
app.use('/api/v1/tasks', taskRoutes);

// Middleware global de errores
app.use((err, req, res, next) => {
  if (err.message === 'NOT_FOUND') {
    return res.status(404).json({ error: 'Recurso no encontrado.' });
  }
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor.' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});