import { combineReducers } from 'redux';
import { CHANGE_SAMPLE_TEXT, CHANGE_SCREEN } from '../actions/types';
import time from './time';
import inventory from './inventory';
import animals from './animals';

const sample = (state='sample', action) => {
  if (action.type === CHANGE_SAMPLE_TEXT) {
    return action.text;
  }

  return state;
}

const screen = (state='main', action) => {
  if (action.type === CHANGE_SCREEN) {
    return action.screen;
  }
  return state;
}

const reducers = combineReducers({
  sample,
  screen,
  time,
  inventory,
  animals,
});

export default reducers;
