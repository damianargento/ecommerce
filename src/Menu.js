import React, { Component } from 'react';
import toggler from './img/hamburger-white.png'

class Menu extends Component{
  constructor(props) {
      super(props)
      this.state = {
        classToHide: "hide-mobile-menu"
      } 
  } 
  render(){

  let hideDesktopMenu = () => { 
    this.state.classToHide === "hide-mobile-menu" ? 
    this.setState({classToHide: "show-mobile-menu"}) : 
    this.setState({classToHide: "hide-mobile-menu"})
  }

  let menuItems = [
    {name: "Nosotros", href: "#nosotros", key:"1"},
    {name: "Como comprar", href: "#comprar", key:"2"},
    {name: "Novedades", href: "#novedades", key:"3"},
    {name: "Recomendados", href: "#recomendados" , key:"4"},
    {name: "Contacto", href: "#contacto", key:"5"},
    {name: "Registrarse", href: "#registrarse", key:"6"},
    {name: "Ingresar", href: "#ingresar", key:"7"}]

    return(
      <div className="menu">
         <div className="toggler" onClick={hideDesktopMenu}><img alt="" src={toggler}/></div>
         <div className={`menuItems ${this.state.classToHide}`}>
        {menuItems.map(item=><a className="menuItem" key={item.key} href={item.href}>{item.name}</a>)}
        </div>
      </div>
      )
    }
 }
export default Menu;
