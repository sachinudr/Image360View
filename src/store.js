import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import root from './reducers/root';

const logger = createLogger();

const store = createStore(
    root,
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;

export const history = syncHistoryWithStore(browserHistory, store);
