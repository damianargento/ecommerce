import React from 'react';
import facebookLogo from '../../img/facebook.png'
import twitterLogo from '../../img/twitter.png'
import googleLogo from '../../img/google.png'


function SocialLogin() {
    let socialLogins = [
      {network: "Facebook", apiLogin:"https://developers.facebook.com/docs/facebook-login/", img:facebookLogo, key:1},
      {network: "Twitter", apiLogin:"https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter", img:twitterLogo, key:2},
      {network: "Google", apiLogin:"https://developers.google.com/identity/sign-in/web/sign-in", img:googleLogo, key:3}]
    return(
    <div className="socialLogin">
      <h4>Social Login</h4>
        {socialLogins.map((login)=>
        <div key={login.key}>
          <a target="_blank" rel="noopener noreferrer" href={login.apiLogin}>
            <img src={login.img} alt={login.network} className="socialLoginIcon"/>
          </a>
        </div>
        )}
    </div>)
 }
 
export default SocialLogin;
