//Recat
import React from 'react';
import ReactDom from 'react-dom';

//Redux
import {createStore} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//Containers
import App from './containers/App';

//Style
import './index.css';

//Create Store
const store = createStore(reducers);

class ReduxCounter extends React.Component{
  render(){
    return(
      <div>
        <Provider store = {store}>          
          <App />
        </Provider>
      </div>
    );
  }
}


export default ReduxCounter;
