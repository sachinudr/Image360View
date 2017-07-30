import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import { history } from './store';
import ImageDirectoryContainer from './containers/ImageDirectoryContainer';

export default (
    /*
     * All routes must be in /:page or /:page/:subPage format
     */
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={ImageDirectoryContainer} />
        </Route>
    </Router>
);
