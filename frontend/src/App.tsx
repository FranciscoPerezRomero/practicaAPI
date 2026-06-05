import { useEffect, useState } from "react";
import "./index.css";

function App() {
  // Hooks
  // Set state
  const [notas, setNotas] = useState([]);
  const [titulo, setTitulo] = useState([]);
  const [contenido, setContenido] = useState([]);
  // Set Effect
  useEffect(() => {
    fetch("http://127.0.0.1:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotas(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="">
      {notas.map((nota) => (
        <p key={nota[0]}>{nota[1]}</p>
      ))}
    </div>
  );
}

export default App;
