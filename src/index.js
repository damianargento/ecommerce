import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router'
import {BrowserRouter} from  'react-router-dom'
import './index.css';
import App from './pages/App';
import Login from './pages/Login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
      </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
