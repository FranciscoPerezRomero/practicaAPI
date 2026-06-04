from pydantic import BaseModel
from typing import Optional

class Nota(BaseModel):
    titulo: str
    contenido: str
    fecha_creacion: str

class NotaUpdate(BaseModel):
    titulo : Optional[str] = None
    contenido : Optional[str] = None
    fecha_creacion : Optional[str] = None