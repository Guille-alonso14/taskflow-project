# Configuración y uso de MCP en Cursor

## ¿Qué es MCP?
Model Context Protocol es un protocolo creado por Anthropic que permite
a los asistentes de IA acceder a herramientas externas como archivos,
GitHub o bases de datos de forma estandarizada.

## Instalación del servidor filesystem

1. Instalar Node.js desde nodejs.org (versión LTS)
2. En Cursor pulsar Ctrl + Shift + P → "Cursor Settings: Tools y MCP"
3. Pulsar "Add custom MCP" y añadir esta configuración:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\34608\\Desktop\\taskflow-project"
      ]
    }
  }
}
```

## 5 consultas realizadas

1. Listar archivos en la raíz del proyecto
2. Leer el contenido de README.md
3. Contar líneas de app.js (437 líneas)
4. Listar archivos dentro de docs/ai
5. Leer el contenido de cursor-workflow.md

## ¿Para qué es útil MCP en proyectos reales?
- Permite a la IA leer y escribir archivos del proyecto directamente
- Evita copiar y pegar código manualmente en el chat
- Útil para analizar proyectos grandes sin límites de contexto
- Permite automatizar tareas como generar documentación o refactorizar