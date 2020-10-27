import React, {useState} from 'react';

function Login() {
  const [login, handleLogin] = useState({email:"", pass:"", loggedIn:false})
  const handleInput = (e) => {
    e.target.type === "email" ?
    handleLogin({...login, email: e.target.value}) :
    handleLogin({...login, pass: e.target.value})
  }
 const handleSend = (e) => {
   e.preventDefault()
    console.log(login.email, login.pass)
    handleLogin({...login, loggedIn: true})
  }
  if (!login.loggedIn){
  return (
    <div className="Login">
    <form onSubmit={handleSend}>
      <input onChange={handleInput} style={{margin: '10px 5px', borderRadius:'3px', border:'0px'}} defaultValue="" type="email" name="email" placeholder="Email" />
      <input onChange={handleInput} style={{margin: '10px 5px', borderRadius:'3px', border:'0px'}} defaultValue="" type="password" name="password" placeholder="Contraseña" />
      <button className="btn" type="submit">Ingresar</button>
    </form>
    </div>
  )}
  return <div className="Login text-white" style={{margin: '10px 5px'}}>Bienvenido {login.email}!</div>
}
export default Login;
