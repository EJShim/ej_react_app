import React from 'react';
import {Link} from 'react-router';
import './Header.css';


const MenuItem = ({active, children, to}) =>  (
  <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
    {children}
  </Link>
)


class Header extends React.Component{

  render(){

    return(
      <div>
        <div className="logo">
          EJ
        </div>

        <div className="menu">
          <MenuItem> 홈 </MenuItem>
          <MenuItem> 소개 </MenuItem>
          <MenuItem> 포스트 </MenuItem>
        </div>
      </div>
    );
  }
}


export default Header
