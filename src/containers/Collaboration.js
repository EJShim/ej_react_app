import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';
import { Route} from 'react-router-dom';
import Memo from './Memo';


class Collaboration extends React.Component{
  constructor(props){
    super(props);

    console.log(props.match.url);
  }

  render(){
    const style={"height":"calc(100vh - 86px)", backgroundColor:"#FF0000"}
    return(
      <div style={style}>       
      </div>
            
    );
  }
}

export default Collaboration;