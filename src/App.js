import React from 'react';
import {useState} from 'react';
import './index.css';
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
import CategoryView from './category-view/CategoryView'
import RegisterPage from './login/RegisterPage'
import ProductPage from './product/ProductPage'

function App() {
  const [pageSelected, setPageSelected] = useState("category");
console.log(pageSelected);
  return (
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Menu setPageSelected={setPageSelected}/>
      </header>
      <main>
        <RegisterPage selected={pageSelected} />
        <ProductPage selected={pageSelected}/>
        <CategoryView selected={pageSelected}/>
      </main>
      <footer className="footer container alt-grid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
