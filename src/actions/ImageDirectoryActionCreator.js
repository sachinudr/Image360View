import * as Action from './ImageDirectoryAction';
import request from 'superagent/lib/client';
import {GET_PANONS_URL} from '../constant';

export function fetchImages() {
    return((dispatch, getState)=>{
        dispatch(fetchImagesRequest());
        let req = request
            .get(`${GET_PANONS_URL}`)
            .set('Accept', 'application/json');

        req
            .end((err, res) => {
                if (err || !res.ok) {
                    console.log('error', err, res);
                    dispatch(fetchImagesFailure())
                } else {
                    console.log('res.body',res.body)
                    let data = res.body;
                    let totalCount = res.body.total;
                    dispatch(fetchImagesSuccess(data, totalCount))
                }
        });

    });
}

export function fetchImagesRequest() {
    return({
        type: Action.FETCH_IMAGE_REQUEST,
        isLoading: true
    });
}

export function fetchImagesFailure() {
    return({
        type: Action.FETCH_IMAGE_FAILURE,
        isLoading: false,
        isFailed: true
    });
}

export function fetchImagesSuccess(data, totalCount) {
    return({
        type: Action.FETCH_IMAGE_SUCCESS,
        data: data,
        total: totalCount
    });
}

export function setCurrentImage(index) {
    return({
        type: Action.SET_CURRENT_IMAGE,
        index: index
    });
}