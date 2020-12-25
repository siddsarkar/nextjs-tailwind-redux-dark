import * as actionTypes from "../actions/actionTypes";

const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case actionTypes.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

export default timerReducer;
