import React from 'react';
import ReactDOM from 'react-dom';


class Collaboration extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      width : 100,
      height : 100
    };
  }

  updateDimensions(){
    let w = window;
    let d = document;
    let documentElement = d.documentElement;
    let body = d.getElementsByTagName('body')[0];

    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    let height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width: width, height: height});
  }

  render(){
    return(
      <div>
        Full-Screen Test
      </div>
    );
  }
}

export default Collaboration;
