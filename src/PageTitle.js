import React, { Component } from 'react';

class PageTitle extends Component{
  render(){
    return(
    <h1 className="pageTitle">
      {this.props.title}
    </h1>)
    }
 }
export default PageTitle;
