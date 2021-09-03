/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'https://lambelambe-e5894-default-rtdb.firebaseio.com/';

import storeConfig from './src/store/storeConfig';
const store = storeConfig()
const Redux = _ => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
