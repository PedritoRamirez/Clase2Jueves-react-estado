import Formulario from "./Formulario"
import {useState} from "react"

function Registro(){
  const [alert,setAlert] = useState({mensaje:"",color:""})
  return(
    <>
      <h3>Completa el formulario</h3>
      <Formulario setAlert={setAlert}/>
      {
        alert.mensaje && <h1 style={{color:alert.color}}>{alert.mensaje}</h1>
      }
      <p>Hecho por Pedro para el commit</p>
    </>
  )
}
export default Registro