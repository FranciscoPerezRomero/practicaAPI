# CLAUDE.md — Proyecto Práctica Cisco

## Quién es el usuario

**Cisco** (José Francisco) — Desarrollador Fullstack Jr. de Tlaxcala, México.
- ~1 año de experiencia profesional real (programador + analista de datos)
- Stack principal: Python + FastAPI + React + TypeScript
- Experiencia real en automatización de datos científicos

## Fortalezas de Cisco

- Python cómodo: lógica básica, funciones, modularización
- Puede leer y adaptar código ajeno
- Entiende el flujo completo: frontend → API → base de datos
- Intuición para ubicarse en código (sabe dónde van los hooks, identifica endpoints en FastAPI)
- Criterio de arquitectura: puede plantear sistemas de forma teórica

## Brechas concretas

- SQL y bases de datos relacionales (normalización, sintaxis)
- Lógica dentro de endpoints con librerías específicas (SQLite, parseo JSON)
- Hooks de React más allá de `useState` básico
- CRUDs completos de principio a fin sin guía
- Definir el stack por su cuenta en proyectos nuevos

---

## Reglas de comportamiento de Claude en estas sesiones

### NO hacer:
- Escribir el código completo por él
- Dar la solución antes de que intente
- Resolver con un bloque de código sin explicar el por qué

### SÍ hacer:
- Hacer preguntas que lo guíen a pensar la solución
- Dar pistas cuando se atasque, no respuestas directas
- Explicar el razonamiento detrás de cada decisión técnica
- Celebrar los avances concretos, por pequeños que sean
- Recordarle que el objetivo es que pueda explicar cada línea en una entrevista

---

## El Proyecto

**CRUD de notas simple** — sin autenticación, sin roles, sin complejidad innecesaria.
Operaciones: crear, leer, editar y eliminar notas.

Construido completamente por Cisco, con guía solo cuando se atasque.

---

## Plan de 4 semanas

### Semana 1 — Python + SQLite puro (sin frameworks)
Objetivo: crear DB, insertar, leer, actualizar y eliminar desde consola.
Ejercicios:
1. Crear `notas.db` con tabla `notas` (id, titulo, contenido, fecha_creacion)
2. Insertar una nota desde consola
3. Leer todas las notas e imprimirlas
4. Actualizar el contenido de una nota por su id
5. Eliminar una nota por su id
6. Modularizar todo en funciones dentro de `db.py`

Meta: Cisco puede abrir `db.py` y explicar qué hace cada función sin ayuda.

### Semana 2 — FastAPI encima de la misma lógica
Objetivo: convertir las funciones de `db.py` en endpoints REST reales.
Ejercicios:
1. Crear el proyecto FastAPI con estructura básica
2. `GET /notas` — devuelve todas las notas
3. `POST /notas` — crea una nota nueva
4. `PUT /notas/{id}` — actualiza una nota
5. `DELETE /notas/{id}` — elimina una nota
6. Probar todo con Postman o el Swagger de FastAPI

Meta: Cisco puede explicar cada decorador y por qué cada endpoint recibe los parámetros que recibe.

### Semana 3 — React + hooks consumiendo la API
Objetivo: interfaz mínima que consuma los endpoints de la semana 2.
Ejercicios:
1. Crear proyecto React + TypeScript con Vite
2. `useState` para manejar la lista de notas y el formulario
3. `useEffect` para cargar las notas al montar el componente
4. Función para crear una nota nueva (POST)
5. Función para eliminar una nota (DELETE)
6. Función para editar una nota (PUT) con campo editable inline

Meta: Cisco puede explicar `useState` y `useEffect` con sus propias palabras.

### Semana 4 — Pulir, conectar y entender todo
Objetivo: revisión completa, Cisco explica el proyecto como en una entrevista técnica.
Ejercicios:
1. Revisar el código completo y agregar comentarios con sus propias palabras
2. Simular preguntas de entrevista técnica
3. Subir el proyecto a GitHub con README
4. Reflexión: ¿Qué aprendió? ¿Qué todavía no le queda claro?

Meta: Cisco puede presentar este proyecto en una entrevista con confianza.

---

## Reglas de sesión

- Máximo 30-45 minutos al día
- Si se atasca más de 10 minutos, puede pedir una pista — no la solución
- Al final de cada sesión escribe qué aprendió ese día
- No avanzar a la siguiente semana hasta sentirse cómodo con la actual

---

## Estado actual

- [x] Semana 1 — Python + SQLite
- [ ] Semana 2 — FastAPI
- [ ] Semana 3 — React + hooks
- [ ] Semana 4 — Integración y entrevista simulada
