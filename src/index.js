import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'leaflet/dist/leaflet.css'

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB9Yh0qBZ7FYufkdsK7YbXUYD8UXbohtHU",
    authDomain: "carte-blanche-1122e.firebaseapp.com",
    databaseURL: "https://carte-blanche-1122e.firebaseio.com",
    projectId: "carte-blanche-1122e",
    storageBucket: "carte-blanche-1122e.appspot.com",
    messagingSenderId: "718237421345"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
