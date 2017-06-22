import React from 'react';
import './BigText.css';

class BigText extends React.Component{
  render(){
    return(
      <div className="big-text">
        {this.props.children}
      </div>
    );
  }
}

export default BigText;
