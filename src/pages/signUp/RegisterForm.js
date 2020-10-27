import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import firebase from '../../config/Firebase'

const RegisterForm = (props) => {
 const [formValues, setFormValues] = useState({name:'', lname:'', email:'', tel:'', pass:'', pass2:''})
 const [show, setShow] = useState(false);
 const [PassError, handlePassError] = useState(false)
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

    let registerInputs = [
      {inputName: "Nombre", type:"text", key:"1", id:"name"},
      {inputName: "Apellido", type:"text", key:"2", id:"lname"},
      {inputName: "Email", type:"mail", key:"3", id:"email"},
      {inputName: "Telefono",type:"tel", key:"4", id:"tel"},
      {inputName: "Password", type:"password", key:"5", id:"pass"},
      {inputName: "Password", type:"password", key:"6", id:"pass2"}]
    
    const handleInputChange = (e, inputId) => {
      switch(inputId){
      case "name":
      setFormValues({...formValues, name: e.target.value})
      break
      case "lname":
      setFormValues({...formValues, lname: e.target.value})
      break
      case "email":
      setFormValues({...formValues, email: e.target.value})
      break
      case "tel":
      setFormValues({...formValues, tel: e.target.value})
      break
      case "pass":
      setFormValues({...formValues, pass: e.target.value})
      formValues.pass1 !== formValues.pass2 ? handlePassError("show") : handlePassError("hide")
      break
      case "pass2":
        setFormValues({...formValues, pass2: e.target.value})
        formValues.pass1 !== formValues.pass2 ? handlePassError("show") : handlePassError("hide")
        break
      default : 
      throw new Error("Unexpected form input")
    }
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      handleShow()
    }
    const handleSend = (e) => {
      const userId = () => {
        const randomInt = (min, max) => min + Math.floor((max - min) * Math.random())
        return randomInt(0, 999999999999999)
      }
      try {firebase.database().ref('/users/' + userId()).set({
        name: formValues.name,
        lname: formValues.lname,
        email: formValues.email,
        telefono: formValues.tel,
        pass: formValues.pass
      })}
      catch(e) {console.log(e)}
      handleClose()
    }
    return(
      <>
    <form onSubmit={handleSubmit} className="registerForm">
        {registerInputs.map((input)=>
        <div key={input.key}>
          <label htmlFor={input.inputName} >{input.inputName}</label>
          <input onChange={(e) => handleInputChange(e, input.id)} className="registerInput" name={input.inputName} type={input.type} required/>
        </div>
        )}
        <div className={PassError}>Los password son diferentes</div>
        <button type="submit" className="btn text-white">Enviar</button>
    </form>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Gracias por registrarte, {formValues.name}!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Estos son tus datos, asegurate que sean correctos:<br />
        Nombre: {formValues.name}<br />
        Apellido: {formValues.lname}<br />
        Email: {formValues.email}<br />
        Telefono: {formValues.tel}<br /></Modal.Body>
    <Modal.Footer>
      <button className="btn btn-primary" onClick={handleClose}>
        Cerrar
      </button>
      <button className="btn btn-primary" onClick={handleSend}>
        Guardar
      </button>
    </Modal.Footer>
  </Modal>
  </>)
 }
 
export default RegisterForm;
