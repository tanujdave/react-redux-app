import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/container/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./app/store";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const initialState = {
    result: 1,
    lastValues: []
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));