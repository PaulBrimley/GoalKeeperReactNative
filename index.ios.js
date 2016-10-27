import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from './core/app/reducers';
import Application from './core/app/Application';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class GoalKeeperReactNative extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
        <Application/>
        </Provider>
  );
  }
}

AppRegistry.registerComponent('GoalKeeperReactNative', () => GoalKeeperReactNative);
