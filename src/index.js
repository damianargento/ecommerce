import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Router} from 'react-router'
import {BrowserRouter} from  'react-router-dom'
import CategoryView from './category-view/CategoryView';
import './index.css';
import App from './Pages/App';
import Login from './Pages/Login'
import Product from './Pages/Product'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/category/' component={App} />
        <Route path='/login/' component={Login} />
        <Route path='/product/' component={Product} />
      </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
