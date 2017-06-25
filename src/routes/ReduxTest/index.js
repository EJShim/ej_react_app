import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import counterApp from './reducers/';


const store = createStore(counterApp);


class ReduxTest extends React.Component{

  render(){
    return(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default ReduxTest;
