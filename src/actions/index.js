import {
  CHANGE_SAMPLE_TEXT,
  END_DAY,
  SET_GOLD,
  CHANGE_SCREEN,
  BUY_COW,
  BUY_FEED,
  FEED,
} from './types';

export const changeSampleText = (text) => {
  return {
    type: CHANGE_SAMPLE_TEXT,
    text,
  }
}

export const changeScreen = (screen) => {
  return {
    type: CHANGE_SCREEN,
    screen,
  }
}

export const endDay = () => {
  return {
    type: END_DAY,
  }
}

export const setGold = (amount) => {
  return {
    type: SET_GOLD,
    amount,
  }
}

export const buyCow = () => {
  return {
    type: BUY_COW,
  }
}

export const buyFeed = () => {
  return {
    type: BUY_FEED,
  }
}

export const feedAnimals = (amount) => {
  return {
    type: FEED,
    amount,
  }
}
