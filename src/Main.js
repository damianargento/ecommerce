import React from 'react';
import './main.css';
import Logo from './Logo'
import Menu from './Menu'

function Main() {
  let menuItems = [
    {name: "Nosotros", href: "#nosotros"},
    {name: "Como comprar", href: "#comprar"},
    {name: "Novedades", href: "#novedades"},
    {name: "Recomendados", href: "#recomendados"},
    {name: "Contacto", href: "#contacto"},
    {name: "Registrarse", href: "#registrarse"},
    {name: "Ingresar", href: "#ingresar"}]
  return (
    <div className="AppWrapper">
      <header className="AppHeader">
       <Logo />
       <Menu menuItems={menuItems}/>
      </header>
    </div>
  );
}

export default Main;
