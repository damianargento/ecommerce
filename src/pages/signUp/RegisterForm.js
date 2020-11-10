import React, {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import firebase from '../../config/Firebase'

const RegisterForm = (props) => {
 const [formValues, setFormValues] = useState({name:'', lname:'', email:'', tel:'', pass:'', pass2:''})
 const [show, setShow] = useState(false);
 const [PassError, handlePassError] = useState(false)
 const [passLengthError, handlePassLengthError] = useState(false)
 const [missingData, showMissingData] = useState(false)
 const [errorInSend, handleErrorInSend] = useState({error:null, show:false})
 const [registerSuccess, handleRegisterSuccess] = useState({success:false, message: null})
const isFormComplete = !PassError && !passLengthError && formValues.name.length > 1 && formValues.lname.length > 1 && formValues.email.length > 1 && formValues.tel.length > 1 ? true : false
const pass1 = formValues.pass
const pass2 = formValues.pass2
useEffect(() => {
  const comparePass = () => {
    pass1 !== pass2 ? handlePassError(true) : handlePassError(false)
    pass1.length > 1 && pass1.length < 6 ? handlePassLengthError(true) : handlePassLengthError(false)
  }
  comparePass();
  if (isFormComplete) showMissingData(false)}, [pass1, pass2, isFormComplete]);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

    let registerInputs = [
      {inputName: "Nombre", type:"text", key:"1", id:"name"},
      {inputName: "Apellido", type:"text", key:"2", id:"lname"},
      {inputName: "Email", type:"mail", key:"3", id:"email"},
      {inputName: "Telefono",type:"tel", key:"4", id:"tel"},
      {inputName: "Password", type:"password", key:"5", id:"pass"},
      {inputName: "Password", type:"password", key:"6", id:"pass2"}]
     const handleValueChange = (inputId) => {
      switch(inputId){
        case "name":
        return formValues.name
         
        case "lname":
        return formValues.lname
        
        case "email":
        return formValues.email
        
        case "tel":
        return formValues.tel
                
        case "pass":
        return formValues.pass
           
        case "pass2":
        return formValues.pass2
        case "reset":
        setFormValues({name:'', lname:'', email:'', tel:'', pass:'', pass2:''})
        break
        default : 
        throw new Error("Unexpected form input")
     } }
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
      break
      case "pass2":
        setFormValues({...formValues, pass2: e.target.value})
        break

      default : 
      throw new Error("Unexpected form input")
    }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
     if(isFormComplete) 
     {
      showMissingData(false)
      handleShow()}
      else {
        showMissingData(true)
      }
    }

    const handleSend = (e) => {
      firebase.auth.createUserWithEmailAndPassword(formValues.email, formValues.pass)
      .then((data)=> {
        firebase.db.collection("usuarios").add({
          name: formValues.name,
          lname: formValues.lname,
          email: formValues.email,
          telefono: formValues.tel,
          id: data.user.uid
      }) 
      handleValueChange("reset");
      handleRegisterSuccess({success:true, message: 'Gracias por registrarse'})
      handleClose()})
      .catch(err => {handleErrorInSend({error: err, show:true}); console.log(err)})
    }
    return(
      <>
    <form onSubmit={handleSubmit} className="registerForm">
      {registerSuccess.success && <Alert variant='success'>{registerSuccess.message}</Alert>}

        {registerInputs.map((input)=>
        <div key={input.key}>
          <label htmlFor={input.inputName} >{input.inputName}</label>
          <input onChange={(e) => handleInputChange(e, input.id)} defaultValue={handleValueChange(input.id)} className="registerInput" name={input.inputName} type={input.type} required/>
        </div>
        )}
         {
          PassError && 
       <Alert variant='danger'>Los password son diferentes</Alert>
        }
        {
          passLengthError && 
          <Alert variant='danger'>El password debe tener al menos 6 digitos</Alert>
        }
        {
          missingData && 
          <Alert variant='danger'>Faltan completar datos correctamente</Alert>
        }
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
      {
        errorInSend.show &&
      <Alert variant='danger'>Hubo un error y no se pudo registrar el usuario:<br /> {errorInSend.error.message}</Alert>
      }
    </Modal.Footer>
  </Modal>
  </>)
 }
 
export default RegisterForm;
