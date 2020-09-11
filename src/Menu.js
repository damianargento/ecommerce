import React, { Component } from 'react';

class Menu extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div className="menu">
      {this.props.menuItems.map(item=><a className="menuItem" href={item.href}>{item.name}</a>)}
    </div>)
    }
 }
export default Menu;
