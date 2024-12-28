import { useEffect, useState } from 'react'
import Switch from './Button'

function App() {

  const [namaTeman, setNamaTeman] = useState("")
  const [jumlahTeman, setJumlahTeman] = useState(1)

  useEffect(() => {
    if (jumlahTeman > 2)
    {
      setNamaTeman("Yusuf")
    } else{
      setNamaTeman("")
    }
  }, [jumlahTeman])

  return (
    <>
    <h1>Nama Teman : {namaTeman}</h1>
      <h1>Jumlah Teman : {jumlahTeman}</h1>
      <button onClick={() => setJumlahTeman((prev) => prev + 1)}>Tambah Teman</button>
      <button onClick={() => setJumlahTeman((prev) => prev <= 0 ? 0 : prev - 1)}>Kurangi Teman</button>
      <div></div>
    <Switch/>
    </>
    
  )
}

export default App
