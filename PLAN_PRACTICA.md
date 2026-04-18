# Plan de Práctica — José Francisco (Cisco)

## Contexto para Claude

Cisco es un desarrollador Fullstack Jr. de Tlaxcala, México. Tiene aproximadamente un año de experiencia profesional real como programador y analista de datos. Su stack principal es Python + FastAPI + React + TypeScript.

**Sus fortalezas reales:**
- Python cómodo a nivel lógica básica, funciones, modularización
- Puede leer código ajeno y adaptarlo
- Entiende el flujo completo de un sistema: frontend → API → base de datos
- Tiene intuición para ubicarse en código (sabe dónde van los hooks, identifica endpoints en FastAPI)
- Criterio de arquitectura: puede plantear un sistema de forma teórica
- Experiencia profesional real en automatización de datos científicos

**Sus brechas concretas:**
- SQL y bases de datos relacionales (nunca dominó normalización, no recuerda la sintaxis)
- Lógica dentro de endpoints cuando entran librerías específicas (SQLite, parseo JSON, etc.)
- Hooks de React más allá de useState básico
- CRUDs completos de principio a fin sin guía
- Definir el stack de trabajo por su cuenta en proyectos nuevos

**Lo que NO debe hacer Claude en estas sesiones:**
- Escribir el código completo por él
- Darle la solución antes de que intente
- Resolver con un bloque de código sin explicar el por qué

**Lo que SÍ debe hacer Claude:**
- Hacer preguntas que lo guíen a pensar la solución
- Dar pistas cuando se atasque, no respuestas directas
- Explicar el razonamiento detrás de cada decisión técnica
- Celebrar los avances concretos, por pequeños que sean
- Recordarle que el objetivo es que él pueda explicar cada línea en una entrevista

---

## El Proyecto de Práctica

**Un CRUD de notas simple** — sin autenticación, sin roles, sin complejidad innecesaria.

Solo: crear, leer, editar y eliminar notas. Pero construido completamente por Cisco, con guía solo cuando se atasque.

**Por qué este proyecto:**
Cubre en un solo ejercicio las 4 brechas principales: SQL básico, endpoints en FastAPI, hooks en React, y lógica de conexión entre capas.

---

## Semana 1 — Python + SQLite puro (sin frameworks)

**Objetivo:** Que Cisco pueda crear una base de datos, insertar, leer, actualizar y eliminar registros usando solo Python y sqlite3, desde consola, sin FastAPI ni React.

**Por qué empezar aquí:** Si la capa de datos le queda clara, todo lo demás es construir encima. FastAPI solo envuelve esta lógica en endpoints, y React solo la muestra en pantalla.

**Ejercicios progresivos:**
1. Crear una base de datos `notas.db` con una tabla `notas` (id, titulo, contenido, fecha_creacion)
2. Insertar una nota desde consola
3. Leer todas las notas e imprimirlas
4. Actualizar el contenido de una nota por su id
5. Eliminar una nota por su id
6. Modularizar todo en funciones dentro de un archivo `db.py`

**Al final de la semana Cisco debe poder:**
Abrir `db.py` y explicar qué hace cada función sin ayuda.

---

## Semana 2 — FastAPI encima de la misma lógica

**Objetivo:** Convertir las funciones de `db.py` en endpoints REST reales.

**Ejercicios progresivos:**
1. Crear el proyecto FastAPI con estructura básica
2. Endpoint GET `/notas` — devuelve todas las notas
3. Endpoint POST `/notas` — crea una nota nueva
4. Endpoint PUT `/notas/{id}` — actualiza una nota
5. Endpoint DELETE `/notas/{id}` — elimina una nota
6. Probar todo con Postman o el Swagger de FastAPI

**Al final de la semana Cisco debe poder:**
Explicar qué hace cada decorador y por qué cada endpoint recibe los parámetros que recibe.

---

## Semana 3 — React + hooks consumiendo la API

**Objetivo:** Construir una interfaz mínima que consuma los endpoints de la semana 2.

**Ejercicios progresivos:**
1. Crear el proyecto React + TypeScript con Vite
2. `useState` para manejar la lista de notas y el formulario
3. `useEffect` para cargar las notas al montar el componente
4. Función para crear una nota nueva (POST)
5. Función para eliminar una nota (DELETE)
6. Función para editar una nota (PUT) con un campo editable inline

**Al final de la semana Cisco debe poder:**
Explicar qué hace `useState` y `useEffect` con sus propias palabras, y por qué se usan en cada lugar.

---

## Semana 4 — Pulir, conectar y entender todo

**Objetivo:** Revisión completa. Cisco explica el proyecto como si fuera una entrevista técnica.

**Ejercicios:**
1. Revisar el código completo y agregar comentarios con sus propias palabras
2. Simular preguntas de entrevista: "¿Por qué usaste SQLite?", "¿Qué hace useEffect?", "¿Cómo manejarías un error en el endpoint?"
3. Subir el proyecto a GitHub con README
4. Reflexión: ¿Qué aprendió? ¿Qué todavía no le queda claro?

**Al final de la semana Cisco debe poder:**
Presentar este proyecto en una entrevista y responder preguntas sobre él con confianza.

---

## Reglas de las sesiones

- Máximo 30-45 minutos al día
- Si se atasca más de 10 minutos en algo, puede pedir una pista — no la solución
- Al final de cada sesión escribe en un comentario qué aprendió ese día
- No avanzar a la siguiente semana hasta sentirse cómodo con la actual

---

## Estado actual

- [ ] Semana 1 — Python + SQLite
- [ ] Semana 2 — FastAPI
- [ ] Semana 3 — React + hooks
- [ ] Semana 4 — Integración y entrevista simulada
