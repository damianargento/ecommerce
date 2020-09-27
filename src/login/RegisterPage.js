import React from 'react';
import RegisterForm from './RegisterForm'
import PageTitle from '../PageTitle'
import SocialLogin from './SocialLogin'

class RegisterPage extends React.Component {

  render() {
    return (
    <div className="container">
      <div className="row RegisterWrapper">
          <div className="col-md-4 imageLeft">
          </div>
          <div className="col-md-8">
            <PageTitle title="Registrarse" />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <RegisterForm />
                </div>
                <div className="col-md-6">
                <SocialLogin />
                </div>
              </div>
            </div>
          </div>   
      </div>
    </div>
  )}
}

export default RegisterPage;
