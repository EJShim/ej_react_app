import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';




class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <NavLink exact to="/" className="item">홈</NavLink>
        <NavLink to="/about" className="item">3D View</NavLink>
        <NavLink to="/redux" className="item">Redux Example</NavLink>

      </div>
    )
  }
}

export default Header
