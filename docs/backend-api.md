# Backend API — Documentación

## ¿Qué es Axios?
Axios es una librería JavaScript para hacer peticiones HTTP desde
el navegador o Node.js. Es más cómoda que fetch porque maneja
automáticamente la conversión de JSON, los errores HTTP y permite
configurar interceptores globales.

## ¿Qué es Postman?
Postman es una herramienta para probar APIs REST. Permite enviar
peticiones HTTP (GET, POST, PUT, DELETE) y ver las respuestas
sin necesidad de escribir código. Muy útil para documentar y
probar endpoints durante el desarrollo.

## ¿Qué es Sentry?
Sentry es una plataforma de monitorización de errores en tiempo
real. Captura excepciones y errores en producción, mostrando
el stack trace completo y el contexto del error. Permite
detectar y solucionar bugs antes de que afecten a muchos usuarios.

## ¿Qué es Swagger?
Swagger (OpenAPI) es un estándar para documentar APIs REST.
Genera documentación interactiva automáticamente desde el código,
permitiendo a otros desarrolladores explorar y probar los
endpoints directamente desde el navegador.

## Endpoints de la API TaskFlow

| Método | URL | Descripción | Respuesta |
|--------|-----|-------------|-----------|
| GET | /api/v1/tasks | Obtener todas las tareas | 200 |
| POST | /api/v1/tasks | Crear una tarea | 201 |
| DELETE | /api/v1/tasks/:id | Eliminar una tarea | 204 |