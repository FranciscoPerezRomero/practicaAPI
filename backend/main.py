from fastapi import FastAPI
import db
from models.nota import Nota, NotaUpdate

app = FastAPI()
db.inicializar_db()

@app.get("/")
def root():
    return {'message':'Hello world'}

@app.get("/notes")
def getNontes():
    return db.mostrar_registros()

@app.post("/insertNotes")
def insertNotes(data: Nota):
    return db.insertar_nota(data.titulo, data.contenido, data.fecha_creacion)

@app.put("/notas/{id}")
def updateNotes(id, data: NotaUpdate):
    return db.editar_nota(id, data.titulo, data.contenido)

@app.delete("/deleteNotes/{id}")
def deleteNotes(id):
    return db.eliminar_nota(id)