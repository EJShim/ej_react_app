import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';




class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <Link to="/" className="item">홈</Link>
        <Link to="/about" className="item">3D View</Link>

      </div>
    )
  }
}

export default Header
