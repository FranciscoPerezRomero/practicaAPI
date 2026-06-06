import { useEffect, useState } from "react";
import "./index.css";
import React from "react";

function App() {
  //* Hooks
  //* Set state
  const [notas, setNotas] = useState([]);
  //* Hooks formulario añadir nota
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  //* Hooks formulario de editar nota
  const [tituloEdit, setTituloEdit] = useState("");
  const [contenidoEdit, setContenidoEdit] = useState("");
  const [editandoNota, setEditandoNota] = useState(null);

  //* Funciones reutilizables
  function cargarNotas() {
    fetch("http://127.0.0.1:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotas(data);
        console.log(data);
      });
  }

  function eliminarNota(id: number) {
    fetch("http://127.0.0.1:8000/deleteNotes/" + id, {
      method: "DELETE",
    }).then(() => cargarNotas());
  }

  //* Set Effect
  useEffect(() => {
    cargarNotas();
  }, []);

  //* Contenido principal
  return (
    <>
      <div className="">
        {notas.map((nota) => (
          <React.Fragment key={nota[0]}>
            {editandoNota === nota[0] ? (
              <span>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    fetch("http://127.0.0.1:8000/notas/" + editandoNota, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        titulo: tituloEdit,
                        contenido: contenidoEdit,
                        fecha_creacion: new Date().toLocaleDateString(),
                      }),
                    }).then(() => {
                      cargarNotas();
                      setEditandoNota(null);
                    });
                  }}
                >
                  <input
                    type="text"
                    value={tituloEdit}
                    onChange={(e) => setTituloEdit(e.target.value)}
                  />
                  <input
                    type="text"
                    value={contenidoEdit}
                    onChange={(e) => setContenidoEdit(e.target.value)}
                  />
                  <button>Guardar cambios</button>
                </form>
              </span>
            ) : (
              <p>{nota[1]}</p>
            )}
            <button onClick={() => eliminarNota(nota[0])}>Eliminar</button>
            <button onClick={() => setEditandoNota(nota[0])}>
              Editar nota
            </button>
          </React.Fragment>
        ))}
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://127.0.0.1:8000/insertNotes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                titulo: titulo,
                contenido: contenido,
                fecha_creacion: new Date().toLocaleDateString(),
              }),
            }).then(() => {
              cargarNotas();
            });
          }}
        >
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
          <button>Crear nueva nota</button>
        </form>
      </div>
    </>
  );
}

export default App;
