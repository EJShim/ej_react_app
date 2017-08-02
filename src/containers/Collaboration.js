import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';


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
    const style={"height":"calc(100vh - 86px)", backgroundColor:"#FF0000"}
    return(
      <Container fluid style={style}>
        Full-Screen Test
      </Container>
    );
  }
}

export default Collaboration;
