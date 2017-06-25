import * as types from '../actions/ActionTypes';

const InitialState = {
  color : 'black',
  number : 0
};

function counter(state = InitialState, action){
  switch(action.type){
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return{
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color : action.color
      };

    default:
      return state;
  }
}


export default counter;
