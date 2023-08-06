// demoReducer.js
import { SET_DEMO, SHOW_DEMO } from '../actions/demoActions';

const initialState = {
  optionD: '',
  demoTopic: '',
  demoDate: '',
  demoTime: '',
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DEMO:
      return {
        ...state,
        ...action.payload,
      };
      case SET_DEMO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default demoReducer;
