import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
