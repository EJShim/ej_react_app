//React modules
import React from 'react';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//UI Modules
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

//Container Modules
import {Home, Chat, Memo, Portfolio, Collaboration} from 'containers';

// Global State
const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      visible : true
    };
  }

  toggleVisibility(){
    this.setState({ visible: !this.state.visible })

  }


  render(){
    const {visible} = this.state

    let bodyStyle = {};
    if(visible){
        bodyStyle = {marginLeft:150};
    }else{
       bodyStyle = {marginLeft:0};
    }




    return(
      <Provider store={store}>
        <BrowserRouter>

        <div>
          <Menu secondary attached="top">
            <Menu.Item onClick={this.toggleVisibility.bind(this)} >
              <Icon name="sidebar" />Menu
            </Menu.Item>
          </Menu>

          <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to="/">
             <Menu.Item name='home'>
               <Icon name='home' />
               Home
             </Menu.Item>
             </Link>

             <Link to="/chat">
             <Menu.Item name='chat'>
               <Icon name='home' />
               Chat
             </Menu.Item>
             </Link>

             <Link to="/collaboration">
             <Menu.Item name='collaboration'>
               <Icon name='home' />
               Collaboration
             </Menu.Item>
             </Link>

              <Link to="/memo">
             <Menu.Item name='memo'>
               <Icon name='home' />
               Memo
             </Menu.Item>
             </Link>

             <Link to="/portfolio">
             <Menu.Item name='portfolio'>
               <Icon name='home' />
               Portfolio
             </Menu.Item>
             </Link>
           </Sidebar>


           <Sidebar.Pusher>
             <Segment basic>

               <div style={bodyStyle} className = 'mainWindow'>
                 <Route exact path = "/" component = {Home} />
                 <Route path = "/chat" component = {Chat} />
                 <Route path = "/collaboration" component = {Collaboration} />
                 <Route path = "/memo" component = {Memo} />
                 <Route path = "/portfolio" component = {Portfolio} />
               </div>

             </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
       </div>
       </BrowserRouter>
     </Provider>

    );
  }
}

export default App;
