import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ImageDirectoryReducer from './ImageDirectoryReducer';

export default combineReducers({
    ImageDirectoryReducer,
    routing: routerReducer
});