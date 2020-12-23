import _ from 'lodash';
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };
};

export const fetchUser = (userId) => {
    return dispatch => {
        _fetchUser(userId, dispatch);
    };
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
});