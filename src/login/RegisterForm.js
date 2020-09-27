import React, { Component } from 'react';

class RegisterForm extends Component{
  
  render(){
    let registerInputs = [
      {inputName: "Nombre", type:"text", key:"1"},
      {inputName: "Apellido", type:"text", key:"2"},
      {inputName: "Email", type:"mail", key:"3"},
      {inputName: "Telefono",type:"tel", key:"4"},
      {inputName: "Password", type:"password", key:"5"},
      {inputName: "Confirmar Password", type:"password", key:"6"}]
      
    return(
    <div className="registerForm">
        {registerInputs.map((input)=>
        <div key={input.key}>
          <label htmlFor={input.inputName} >{input.inputName}</label>
          <input defaultValue="" className="registerInput" name={input.inputName} type={input.type} />
        </div>
        )}
        <button type="submit" className="btn text-white">Enviar</button>
    </div>)
    }
 }
 
export default RegisterForm;
