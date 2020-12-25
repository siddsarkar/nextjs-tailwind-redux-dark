import * as actionTypes from "./actionTypes";

export const incrementCount = () => ({ type: actionTypes.INCREMENT });
export const decrementCount = () => ({ type: actionTypes.DECREMENT });
export const resetCount = () => ({ type: actionTypes.RESET });
