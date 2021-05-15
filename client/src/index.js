// Connect react file to index HTML

import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"

// Provider keeps track of global store making it accessible all over the app 
import {Provider} from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


// Connecting to div with an Id of root 
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


