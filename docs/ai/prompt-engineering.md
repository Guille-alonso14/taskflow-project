# Prompt Engineering

En este documento se recogen al menos diez prompts útiles para
el desarrollo. Se explica por qué cada prompt funciona bien y
se muestran ejemplos aplicados a generación de código, refactorización
y documentación del proyecto TaskFlow.

## Prompts documentados

### Prompt 1 — Definir rol (Role prompting)

**Técnica:** Definir un rol experto antes de la pregunta.

**Prompt:**
"Actúa como un desarrollador senior con 10 años de experiencia
en JavaScript. Revisa esta función y dime cómo mejorarla."

**Por qué funciona:**
Al asignar un rol experto la IA adopta un tono más técnico,
detecta más problemas y proporciona soluciones de nivel producción
que no daría con una pregunta genérica.

**Resultado obtenido:**
Detectó 4 problemas (==, for imperativo, dependencia global,
comparación con true) y propuso versión moderna con filter,
valor por defecto y optional chaining.

### Prompt 2 — Few-shot prompting (ejemplos)

**Técnica:** Dar ejemplos del formato esperado antes de la pregunta.

**Prompt:**
"Te voy a dar ejemplos de cómo quiero que documentes funciones
JavaScript, y luego quiero que documentes una función nueva
siguiendo el mismo patrón."

**Por qué funciona:**
Al dar ejemplos concretos la IA entiende exactamente el formato
esperado sin necesidad de describirlo. Reduce ambigüedad y
produce resultados más consistentes.

**Resultado obtenido:**
Documentó la función deleteTask siguiendo exactamente el patrón
de los ejemplos, incluyendo el tipo void y una nota técnica
sobre efectos secundarios.

### Prompt 3 — Razonamiento paso a paso (Chain of thought)

**Técnica:** Pedir que razone cada línea antes de dar una conclusión.

**Prompt:**
"Explícame paso a paso cómo funciona esta función de TaskFlow,
razonando cada línea antes de dar una conclusión final."

**Por qué funciona:**
Al pedir razonamiento explícito la IA no salta directamente
a la conclusión sino que analiza cada parte. Útil para entender
código complejo o detectar problemas ocultos.

**Resultado obtenido:**
Analizó cada línea individualmente, explicó el flujo de ejecución
e identificó el patrón "Render Aggregator" que no habría
mencionado con una pregunta directa.

### Prompt 4 — Restricciones claras (Constrained prompting)

**Técnica:** Definir restricciones específicas en la respuesta.

**Prompt:**
"Genera una función JavaScript que valide un formulario de tareas.
Restricciones: debe usar solo JavaScript vanilla, no puede tener
más de 15 líneas, debe validar que el título no esté vacío y que
no supere 200 caracteres, y debe devolver un objeto con isValid
y errorMessage."

**Por qué funciona:**
Las restricciones eliminan ambigüedad y fuerzan a la IA a producir
exactamente lo que necesitas. Sin restricciones la IA puede generar
código demasiado largo, con librerías externas o con un formato distinto al esperado.

**Resultado obtenido:**
Generó una función de 11 líneas que cumplió todas las restricciones
y además propuso una versión mejorada con parámetro configurable.

### Prompt 5 — Generación de ideas

**Técnica:** Pedir lista de ideas con formato estructurado.

**Prompt:**
"Genera 5 ideas de funcionalidades nuevas para una app de gestión
de tareas llamada TaskFlow. Para cada idea explica en una línea
qué hace y por qué sería útil."

**Por qué funciona:**
Especificar el número exacto de ideas y el formato de respuesta
produce resultados más útiles y concisos. Sin formato definido
la IA puede dar respuestas demasiado largas o poco estructuradas.

**Resultado obtenido:**
Generó 5 ideas concretas con explicación clara. Las más
interesantes para implementar: subtareas, estadísticas de
productividad y filtros avanzados.

### Prompt 6 — Rol experto en dominio específico

**Técnica:** Asignar un rol experto en un área concreta.

**Prompt:**
"Actúa como un experto en accesibilidad web. Revisa este HTML
y dime qué mejoras de accesibilidad necesita."

**Por qué funciona:**
Especificar un rol experto en un área concreta (accesibilidad,
seguridad, rendimiento...) hace que la IA adopte criterios
profesionales específicos de ese campo que no aplicaría
con una pregunta genérica.

**Resultado obtenido:**
Identificó 3 problemas críticos con severidad clasificada,
propuso soluciones WCAG 2.1 AA y priorizó los cambios
por impacto real.

### Prompt 7 — Analogía para explicar conceptos

**Técnica:** Pedir explicación con analogía del mundo real.

**Prompt:**
"Explícame qué es localStorage en JavaScript como si tuviese
10 años, usando una analogía del mundo real."

**Por qué funciona:**
Pedir una analogía obliga a la IA a conectar conceptos técnicos
con experiencias cotidianas. Muy útil para entender conceptos
abstractos o para explicárselos a personas sin conocimientos técnicos.

**Resultado obtenido:**
Explicó localStorage como una caja de juguetes con etiquetas,
haciendo el concepto inmediatamente comprensible sin necesidad
de conocimientos previos de programación.

### Prompt 8 — Múltiples variantes en una sola consulta

**Técnica:** Pedir varias versiones del mismo problema.

**Prompt:**
"Genera el código JavaScript para una función que ordene un array
de tareas. Quiero tres versiones diferentes: por fecha de creación,
por prioridad (alta > normal > baja) y alfabéticamente por título."

**Por qué funciona:**
Pedir múltiples variantes en una sola consulta ahorra tiempo
y permite comparar enfoques diferentes. La IA genera soluciones
complementarias que juntas forman una solución más completa.

**Resultado obtenido:**
Generó 3 funciones independientes más una versión avanzada
que unifica las tres usando un mapa de sorters. Esta última
es directamente aplicable a TaskFlow.

### Prompt 9 — Respuesta concisa con formato específico

**Técnica:** Pedir formato de respuesta específico y conciso.

**Prompt:**
"Revisa este código y dime únicamente qué está mal, sin
explicaciones largas ni soluciones. Solo lista los problemas
en formato de bullet points."

**Por qué funciona:**
Especificar el formato y la longitud de la respuesta evita
respuestas largas cuando solo necesitas información concisa.
Muy útil cuando ya sabes cómo solucionar los problemas y solo
necesitas identificarlos rápidamente.

**Resultado obtenido:**
Lista limpia de 8 problemas en segundos, sin texto innecesario.
Mucho más eficiente que una revisión completa con soluciones.

### Prompt 10 — Formato de respuesta estructurado

**Técnica:** Definir un formato de respuesta con secciones claras.

**Prompt:**
"Actúa como un desarrollador senior haciendo code review.
Dame feedback constructivo en este formato exacto:
✅ Lo que está bien
⚠️ Lo que se puede mejorar
🔴 Lo que hay que cambiar obligatoriamente"

**Por qué funciona:**
Definir un formato con secciones claras organiza la respuesta
de forma que es inmediatamente accionable. Sabes exactamente
qué es urgente, qué es opcional y qué está correcto.
Muy útil para code reviews y revisiones de código.

**Resultado obtenido:**
Feedback organizado en tres niveles de prioridad. Identificó
que la falta de validación del parámetro id es obligatorio
corregir, algo que sin el formato podría haberse mezclado
con sugerencias opcionales.
