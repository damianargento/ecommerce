import React from 'react';
import './index.css';
import {Route} from 'react-router'
import {BrowserRouter} from  'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
import CategoryView from './pages/category-view/CategoryView'
import ProductPage from './pages/product/ProductPage'
import RegisterPage from './pages/login/RegisterPage'

function App() {

  return (
  <BrowserRouter>
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Menu />
      </header>
      <main>
        <Route path='/' component={CategoryView} exact />
        <Route path='/category/:name' component={CategoryView} exact />
        <Route path='/category/' component={CategoryView} exact />
        <Route path='/login/' component={RegisterPage} exact />
        <Route path='/product/' component={ProductPage} exact />
      </main>
      <footer className="footer container alt-grid">
        <Footer />
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
