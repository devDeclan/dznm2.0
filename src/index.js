//REACT
import React from 'react';
import ReactDOM from 'react-dom';

//REDUX
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';

//STYLESHEETS
import './index.css';
import 'assets/css/argon-dashboard-react.css';
import "assets/vendor/nucleo/css/nucleo.css";
import 'assets/vendor/fontawesome/css/all.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

//FIREBASE
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from 'config';

//initialise firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

//configure persistor
let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
