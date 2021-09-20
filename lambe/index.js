/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';
import axios from 'axios';
import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCj-_AFypHG-A3dgEY_VFLZuFOfBm-2lwM",
    authDomain: "instagram-lambe.firebaseapp.com",
    projectId: "instagram-lambe",
    storageBucket: "instagram-lambe.appspot.com",
    messagingSenderId: "596143632135",
    appId: "1:596143632135:web:bbe14303b50066aead1fa2",
    measurementId: "G-YDR24HEZ5D",
    databaseURL: "https://instagram-lambe-default-rtdb.firebaseio.com/"
};


axios.defaults.baseURL = firebaseConfig.databaseURL;
import storeConfig from './src/store/storeConfig';
const store = storeConfig()
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
const Redux = _ => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
