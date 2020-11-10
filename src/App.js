import React from 'react';
import './index.css';
import {Route} from 'react-router'
import {BrowserRouter} from  'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
import CategoryView from './pages/category-view/CategoryView'
import ProductPage from './pages/product/ProductPage'
import RegisterPage from './pages/signUp/RegisterPage'
import Login from './Login'


function App() {
  return (
  <BrowserRouter>
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Login />
       <Menu />
      </header>
      <main>
        <Route path='/' component={CategoryView} exact />
        <Route path='/category/:name' component={CategoryView} exact />
        <Route path='/category/' component={CategoryView} exact />
        <Route path='/signUp/' component={RegisterPage} exact />
        <Route path='/product/:id' component={ProductPage} exact />
      </main>
      <footer className="footer container alt-grid">
        <Footer />
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
