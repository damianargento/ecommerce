import React from 'react';
import './index.css';
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'
// import RegisterPage from './login/RegisterPage'
import ProductPage from './product/ProductPage'

function App() {
  return (
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Menu />
      </header>
      <main>
        {/* <RegisterPage /> */}
        <ProductPage />
      </main>
      <footer className="footer container alt-grid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
