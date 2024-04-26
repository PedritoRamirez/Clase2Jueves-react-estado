import {useState} from 'react'
import { limpiar } from '../utils/limpiar'

function Formulario({setAlert}){
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  function enviarFormulario(e){
    e.preventDefault()
    if(user==="" || password === "" || confirmPassword===""){
      setAlert({mensaje:"Debes completar todos los campos",color:"red"})
      limpiar(setUser,setPassword,setConfirmPassword)
      return
    }
    if(password !== confirmPassword){
      setAlert({mensaje:"Los password deben coincidir",color:"red"})
      limpiar(setUser,setPassword,setConfirmPassword) 
      return
    }else{   
      setAlert({mensaje:"Bien por fin lo lograste ",color:"green"})
      limpiar(setUser,setPassword,setConfirmPassword)
    }
    console.log({user,password,confirmPassword})
  }
  return(
    <>
      <form onSubmit={enviarFormulario}>
        <input placeholder="nombre de usuario" value={user} type="text" onChange={
          (e)=>setUser(e.target.value)
        } />
        <input placeholder="password" type="password" value={password} onChange={
          (e)=>setPassword(e.target.value)
          
        }/>
        <input placeholder="confirme su password" type="password" value={confirmPassword} onChange={
          (e)=>setConfirmPassword(e.target.value)
        }/>
        <button type="submit">Iniciar Sesion</button>
      </form>
    </>
  )

}
export default Formulario