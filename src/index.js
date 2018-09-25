import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';
import setupSocket from './sockets'
import username from './utils/name';
import handleNewMessage from './sagas'

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
    );
    
const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
