import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';
import App from './App';

const store = createStore(reducers, devToolsEnhancer());

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;
