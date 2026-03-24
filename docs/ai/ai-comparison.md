# Comparativa entre asistentes de IA

En este documento se recoge la comparativa entre ChatGPT y Claude.
Se analizan explicaciones de conceptos técnicos, detección de bugs
y generación de código, evaluando claridad, profundidad y calidad.

## Concepto 1: Closures en JavaScript

### Prompt usado
"Explícame qué es un closure en JavaScript con un ejemplo práctico"

### Claude
Explicación concisa y directa con un único ejemplo de contador.
Menciona casos de uso prácticos al final.

### ChatGPT
Explicación más extensa con varios ejemplos progresivos.
Incluye el caso clásico de var en bucles con setTimeout.
Usa emojis para organizar visualmente el contenido.

### Conclusión
Claude es más directo y rápido de leer.
ChatGPT es más completo y didáctico para aprender desde cero.

## Concepto 2: Event Loop en JavaScript

### Prompt usado
"Explícame qué es el event loop en JavaScript con un ejemplo práctico"

### Claude
Explicación clara y concisa con las tres partes clave.
Un único ejemplo con setTimeout.

### ChatGPT
Explicación más completa. Añade la diferencia entre
Microtask Queue (Promises) y Task Queue (setTimeout).
Incluye ejemplos de entrevistas técnicas.

### Conclusión
ChatGPT aporta más valor aquí al explicar la prioridad
de las Promises sobre setTimeout, detalle que Claude omite.

## Concepto 3: Hoisting en JavaScript

### Prompt usado
"Explícame qué es el hoisting en JavaScript con un ejemplo práctico"

### Claude
Explicación concisa cubriendo funciones, var y let/const.
Incluye la regla práctica de usar siempre let y const.

### ChatGPT
Más detallado. Añade la diferencia entre function declaration
y function expression con hoisting, caso que Claude omite.
Incluye tabla comparativa de los tres tipos de variables.

### Conclusión
Ambos cubren bien el concepto. ChatGPT añade el caso de
function expression que es un bug muy común en la práctica.

## Detección de bugs

### Prompt usado
"Detecta y explica los bugs en estas tres funciones JavaScript"

### Claude
Detectó los tres bugs correctamente de forma concisa.
Mencionó además el problema de usar var en lugar de let.

### ChatGPT
Detectó los tres bugs con más detalle visual.
Añadió tabla resumen y versión final corregida completa.
Sugirió usar for...of como mejora moderna.

### Conclusión
Ambos detectaron todos los bugs. ChatGPT fue más didáctico
y añadió mejoras extra. Claude fue más directo y mencionó
el problema de var que ChatGPT pasó por alto inicialmente.

## Generación de código

### Función 1: filtrar números pares ordenados

**Claude** — Solución en 3 líneas, muy concisa.
**ChatGPT** — Misma solución pero con versión alternativa,
robusta con validaciones y ejercicio extra.

### Función 2: palíndromo

**Claude** — Solución en 2 líneas, muy compacta.
**ChatGPT** — Añade versión con acentos y versión
optimizada con dos punteros más eficiente.

### Función 3: mayores de edad ordenados

**Claude** — Solución concisa con localeCompare.
**ChatGPT** — Añade versión con validaciones y
versión que devuelve solo nombres con map().

### Conclusión general sobre generación de código
Ambos generan código correcto y funcional.
Claude es más conciso y directo.
ChatGPT añade más variantes, validaciones y casos edge,
lo que es más útil en código de producción real.