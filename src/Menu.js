import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import toggler from './img/hamburger-white.png'

class Menu extends Component{
  constructor(props) {
      super(props)
      this.state = {
        classToHide: "hide-mobile-menu",
      } 
  } 
  render(){

  let hideDesktopMenu = () => { 
    this.state.classToHide === "hide-mobile-menu" ? 
    this.setState({classToHide: "show-mobile-menu"}) : 
    this.setState({classToHide: "hide-mobile-menu"})
  }

  let menuItems = [
    {name: "Categoria", href: "category", key:"1"},
    {name: "Producto", href: "product", key:"2"},
    {name: "Registrarse", href: "login", key:"3"}]

    return(
      <div className="menu">
         <div className="toggler" onClick={hideDesktopMenu}><img alt="" src={toggler}/></div>
         <div className={`menuItems ${this.state.classToHide}`}>
         {menuItems.map(item=><Link to={`/${item.href}/`}><div className="menuItem" key={item.key}>{item.name}</div></Link>)}
        </div>
      </div>
      )
    }
 }
export default Menu;
