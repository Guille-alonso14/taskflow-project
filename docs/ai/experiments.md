# Experimentos con IA en programación

En este documento se recogen experimentos comparando la resolución
de problemas de programación con y sin ayuda de IA. Se analiza
el tiempo invertido, la calidad del código y la comprensión
del problema en cada caso.

## Experimento 1: Contar tareas creadas hoy

### Sin IA
Tiempo: 10 minutos
Solución: Comparación manual de año, mes y día con getFullYear(),
getMonth() y getDate().
Resultado: Correcto pero más verbose.

### Con IA
Tiempo: segundos
Solución: Uso de toDateString() para comparar fechas como strings.
Resultado: Más conciso y elegante.

### Conclusión
La IA aportó una solución más compacta usando toDateString()
que yo no había considerado. Sin embargo mi solución también
era correcta. La IA fue útil para descubrir métodos alternativos.

## Experimento 2: Título de la tarea más antigua

### Sin IA
Tiempo: 20 minutos
Solución: Bucle for comparando fechas con new Date().
Resultado: Correcto, legible y fácil de entender.

### Con IA
Tiempo: segundos
Solución: reduce() para encontrar la tarea más antigua
en una sola pasada.
Resultado: Más conciso pero más difícil de leer.

### Conclusión
Mi solución con for es más legible para alguien que está
aprendiendo. La IA usó reduce que es más moderna pero
requiere más conocimiento de JavaScript funcional.
En este caso mi solución puede ser preferible por claridad.

## Experimento 3: Agrupar tareas por prioridad

### Sin IA
Tiempo: 15 minutos
Solución: reduce() con valor por defecto 'normal' e
inicialización de las tres claves en el acumulador.
Resultado: Más robusto y completo.

### Con IA
Tiempo: segundos
Solución: reduce() sobre objeto vacío sin inicialización
de claves ni valor por defecto.
Resultado: Más conciso pero menos robusto.

### Conclusión general de los 3 experimentos
La IA es muy útil para generar soluciones rápidas y descubrir
métodos alternativos. Sin embargo en el tercer experimento
mi solución fue más robusta que la de la IA. La IA ahorra
tiempo pero siempre hay que revisar el código generado.
