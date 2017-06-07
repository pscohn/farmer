import {
  END_DAY,
} from '../actions/types';

const defaultState = {
  month: 0,
  day: 0,
  year: 0,
}

const time = (state=defaultState, action) => {
  if (action.type == END_DAY) {
    if (state.day === 29) {
      if (state.month === 11) {
        return { month: 0, day: 0, year: state.year + 1 }
      }
      return { month: state.month + 1, day: 0, year: state.year }
    }
    return Object.assign({}, state, { day: state.day + 1 });
  }
  return state;
}

export default time;
