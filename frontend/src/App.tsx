import { useEffect, useState } from 'react'
import './index.css'

function App() {
  // Hooks
  const [notas, setNotas] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/notas')
      .then(res => res.json())
      .then(data => setNotas(data))
  }, [])
  return (
    <div>
      <p></p>
    </div>
  )
}

export default App
