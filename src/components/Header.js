import React from 'react';
import {Link} from 'react-router';
import './Header.css';


const MenuItem = ({active, children, to}) =>  (
  <Link to={to} className= {`menu-item ${active ? 'active':''}`}>
    {children}
  </Link>
)


class Header extends React.Component{

  render(){
    const router = this.context.router;
    // const { router } = this.props.context;
    return(
      <div>
        <div className="logo">
          EJ
        </div>

        <div className="menu">
          <MenuItem to={"/"} active={router.isActive('/', true)}> 홈 </MenuItem>
          <MenuItem to={"/about"} active={router.isActive('/about', true)}> 소개 </MenuItem>
          <MenuItem to={"/post"} active={router.isActive('/post', true)}> 포스트 </MenuItem>
        </div>
      </div>
    );
  }
}


Header.contextTypes = {
  router: React.PropTypes.object
}


export default Header
