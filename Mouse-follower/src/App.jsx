import { useEffect, useState } from "react"

const FollowMouse = () =>{
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x : 0, y: 0 })

  //pointer move
  useEffect(() => {
    console.log('effect'), {enable}

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('hanleMove', {clientX, clientY})
      setPosition({ x:clientX, y:clientY })
    } 

    if(enable){
      window.addEventListener('pointermove', handleMove)
    }
    //se limpia cuando el componente se desmonta
    //cuando cambian las dependencias
    return() => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }
  },[enable])

  //change body className
  useEffect(() =>{
    document.body.classList.toggle('no-cursor', enable)

    return() =>{
      document.body.classList.remove('no-cursor')
    }
  },[enable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

    <h3>Proyecto 3</h3>
    <button onClick={() => setEnable(!enable)}>
      {enable ? 'Desactivar' : 'Activar'}  seguir puntero       
    </button>
    </>
  )
}
function App() {
  const [mounted, setMounted] = useState(true)


  return(
    <main>
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse componente
      </button>
    </main>
  )
}

export default App
