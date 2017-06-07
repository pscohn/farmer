import {
  BUY_COW,
  FEED,
  END_DAY,
} from '../actions/types';

const defaultCow = {
  dayPurchased: 0,
  daysWithoutFood: 0,
  hasMilkedToday: false,
};

const defaultState = {
  hasFedToday: false,
  cows: [],
  chickens: [],
  sheep: [],
};

const animals = (state=defaultState, action) => {
  if (action.type == BUY_COW) {
    return {...state, cows: [...state.cows, defaultCow]}; 
  }
  if (action.type == FEED) {
    return {...state, hasFedToday: true}; 
  }
  if (action.type == END_DAY) {
    return {...state, hasFedToday: false};
  }
  return state;
}

export default animals;
