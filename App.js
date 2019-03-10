import React from 'react';
import StartupScreen from './screens/StartupScreen';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <StartupScreen></StartupScreen>
      </Provider>
    );
  }
}
