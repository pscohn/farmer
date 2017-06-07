import {
  SET_GOLD,
  BUY_FEED,
  FEED,
} from '../actions/types';

const defaultState = {
  gold: 500,
  feed: 0,
}

const inventory = (state=defaultState, action) => {
  switch (action.type) {
    case SET_GOLD:
      return Object.assign({}, state, { gold: action.amount });
    case BUY_FEED:
      return {...state, feed: state.feed + 1};
    case FEED:
      return {...state, feed: state.feed - action.amount};
    default:
      return state;
  }
}

export default inventory;
