import React from 'react';
import './index.css';
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
import CategoryView from './category-view/CategoryView'
// import RegisterPage from './login/RegisterPage'
// import ProductPage from './product/ProductPage'

function App() {

  return (
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Menu />
      </header>
      <main>
        {/* <RegisterPage /> */}
        {/* <ProductPage /> */}
        <CategoryView />
      </main>
      <footer className="footer container alt-grid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
