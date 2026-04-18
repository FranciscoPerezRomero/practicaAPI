from fastapi import FastAPI
import db


app = FastAPI()

@app.get("/")
def root():
    return {'message':'Hello world'}

@app.get("/notes")
def getNontes():
    return db.mostrar_registros()