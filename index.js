/**
 * @format
 */
import store from '@redux/Store'
import React from 'react'
import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'
import App from './src/App'

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux)
