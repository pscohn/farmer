import React from 'react';
import { connect } from 'react-redux';
import Sample from './components/Sample';
import Shop from './components/Shop';
import Barn from './components/Barn';

const App = ({ screen }) => {
  let currentScreen;
  if (screen === 'main') {
    currentScreen = <Sample />;
  } else if (screen === 'shop') {
    currentScreen = <Shop />;
  } else if (screen === 'barn') {
    currentScreen = <Barn />;
  }
  return currentScreen;
}

export default connect(({ screen }) => ({ screen }))(App);
