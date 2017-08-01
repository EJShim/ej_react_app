import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import reducers from 'reducers';
import thunk from 'redux-thunk';


import {App} from 'containers';
import { createStore, applyMiddleware } from 'redux';


const rootElement = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path = "/" component={App}/>
    </BrowserRouter>

  </Provider>, rootElement);



//JQUERY Handle
$('.ui.sidebar')
  .sidebar('toggle');


$('.ui.labeled.icon.sidebar')
  .sidebar('toggle')
;
