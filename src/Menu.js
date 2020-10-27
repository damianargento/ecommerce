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
    {name: "Ultimos Productos", href: "category", key:"1"},
    {name: "Registrarse", href: "signUp", key:"2"}]

    return(
      <div className="menu">
         <div className="toggler" onClick={hideDesktopMenu}><img alt="" src={toggler}/></div>
         <div className={`menuItems ${this.state.classToHide}`}>
         {menuItems.map(item=><Link key={item.key} to={`/${item.href}/`}><div className="menuItem" >{item.name}</div></Link>)}
        </div>
      </div>
      )
    }
 }
export default Menu;
