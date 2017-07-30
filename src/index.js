import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root from './reducers/root';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import store from './store';


//let store = createStore(root);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,document.getElementById('root'));
registerServiceWorker();
