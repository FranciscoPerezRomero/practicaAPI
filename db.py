import sqlite3

def inicializar_db():
    # *Conexion a la base de datos
    con = sqlite3.connect("notas.db")
    cursor = con.cursor()
    # *Creación de la tabla para notas
    cursor.execute("CREATE TABLE IF NOT EXISTS notas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, contenido TEXT, fecha_creación TEXT)")
    con.commit()
    con.close()

def insertar_nota(titulo, contenido, fecha_creacion):
    # *Conexion a la base de datos
    con = sqlite3.connect("notas.db")
    cursor = con.cursor()
    # *Creación de consulta sqlite3
    cursor.execute("INSERT INTO notas (titulo,contenido,fecha_creación) VALUES (?,?,?)", (titulo, contenido, fecha_creacion))
    con.commit()
    con.close()

def mostrar_registros():
    con = sqlite3.connect("notas.db")
    cursor = con.cursor()
    # * Se consulta a la tabla para ver los registros
    cursor.execute("SELECT * FROM notas")
    datos = cursor.fetchall()
    con.close()
    return datos
    

def editar_nota(id, titulo = None, contenido = None):
    con = sqlite3.connect("notas.db")
    cursor = con.cursor()
    if titulo is not None:
        cursor.execute('UPDATE notas SET titulo = ? WHERE id = ?',(titulo,id,))
        con.commit()
    if contenido is not None:
        cursor.execute('UPDATE notas SET contenido = ? WHERE id = ?',(contenido,id,))
        con.commit()
    cursor.execute('SELECT * FROM notas WHERE id = ?',(id,))
    data = cursor.fetchone()
    con.close()
    print(data)

def eliminar_nota (id):
    con = sqlite3.connect("notas.db")
    cursor = con.cursor()
    cursor.execute('DELETE FROM notas WHERE id = ?', (id,))
    con.commit()
    con.close()
    print('Registro eliminado')