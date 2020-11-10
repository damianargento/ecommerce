import React, {useState} from 'react';
import firebase from './config/Firebase'
import { Alert } from 'react-bootstrap';

function Login() {
  const [login, handleLogin] = useState({email:"", pass:"", loggedIn:false})
  const [errorInSend, handleErrorInSend] = useState({error:null, show:false})

  const handleInput = (e) => {
    e.target.type === "email" ?
    handleLogin({...login, email: e.target.value}) :
    handleLogin({...login, pass: e.target.value})
  }
 const handleSend = (e) => {
  e.preventDefault()
  
  firebase.auth.signInWithEmailAndPassword(login.email, login.pass)
  .then(data => {
    console.log(data); 
    handleLogin({...login, loggedIn: true})
  })
  .catch(err => {handleErrorInSend({error: err, show:true}); console.log(err)})

 }

  if (!login.loggedIn){
  return (
    <div className="Login">
    <form method="post" onSubmit={handleSend}>
      <input onChange={handleInput} style={{margin: '10px 5px', borderRadius:'3px', border:'0px'}} defaultValue="" type="email" name="email" placeholder="Email" />
      <input onChange={handleInput} style={{margin: '10px 5px', borderRadius:'3px', border:'0px'}} defaultValue="" type="password" name="password" placeholder="Contraseña" />
      <button className="btn" type="submit">Ingresar</button>
      {
        errorInSend.show &&
      <Alert variant='danger'>Hubo un error y no se pudo loguear:<br /> {errorInSend.error.message}</Alert>
      }
    </form>
    </div>
  )}
  return <div className="Login text-white" style={{margin: '10px 5px'}}>Bienvenido {login.email}!</div>
}
export default Login;
