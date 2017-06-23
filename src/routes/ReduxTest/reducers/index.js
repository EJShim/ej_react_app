import {INCREMENT, DECREMENT, SET_DIFF} from '../actions/';
import {combineReducers} from 'redux';

const counterInitialState = {
  value:0,
  diff:1
};

const counter = (state=counterInitialState, action) =>{
  switch(action.type){
    case INCREMENT: // Set state.value = state.value + state.diff
      return Object.assign({}, state, {value:state.value + state.diff});

    case DECREMENT: //Set state.value = state.value - state.diff
      return Object.assign({}, state, {value:state.value - state.diff});

    case SET_DIFF: //Set State.diff = action.diff
      return Object.assign({}, state, {diff:action.diff});

  }
};

const extra = (state="Extra Reducer", action) =>{
  switch(action.type){
    default:
      return state;
  }
};

const counterApp = combineReducers({counter, extra});

export default counterApp;
