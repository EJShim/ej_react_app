import React from 'react';
import './Header.css';


const MenuItem = ({active, children, to}) =>  (
  <div className="menu-item">
    {children}
  </div>
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
