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
import {Home, Chat, Memo, Portfolio, Collaboration, Videos} from 'containers';

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



    return(
      <Provider store={store}>
        <BrowserRouter>

        <div>
          <Menu secondary attached="top">
            <Menu.Item onClick={this.toggleVisibility.bind(this)} >
              <Icon name="sidebar" />Menu
            </Menu.Item>

            <Menu.Item>
              <Link to="/"> <Icon name="home"/> </Link>
            </Menu.Item>
          </Menu>

          <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
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

             <Link to="/videos">
             <Menu.Item name='videos'>
               <Icon name='home' />
               Videos
             </Menu.Item>
             </Link>
           </Sidebar>


           <Sidebar.Pusher>
             <Segment basic>

               <div className = 'mainWindow'>
                 <Route exact path = "/" component = {Home} />
                 <Route path = "/chat" component = {Chat} />
                 <Route path = "/collaboration" component = {Collaboration} />
                 <Route path = "/memo" component = {Memo} />
                 <Route path = "/portfolio" component = {Portfolio} />
                 <Route path = "/videos" component={Videos}/>
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
