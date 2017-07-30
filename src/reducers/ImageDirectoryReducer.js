import * as Action from '../actions/ImageDirectoryAction';

const INITIAL_STATE = {
    data: [],
    currentImage: null,
    isFailed: false,
    isLoading: true
};

export default function(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case Action.SET_CURRENT_IMAGE:   return {   ...state,   currentImage: action.index };
        case Action.FETCH_IMAGE_SUCCESS: return {   ...state,   data: action.data, currentImage: 0, isLoading: false, isFailed: false};
        case Action.FETCH_IMAGE_REQUEST: return {   ...state,   isLoading: true };
        case Action.FETCH_IMAGE_FAILURE: return {   ...state,   isLoading: false, isFailed: true };
        default: return state;
    }
}