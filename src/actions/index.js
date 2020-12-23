import _ from 'lodash';
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        // const userIds = _.uniq(_.map(getState().posts, 'userId'));
        // userIds.forEach(id => dispatch(fetchUser(id)));

        // Can use either one

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value();
    };
};

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({type: 'FETCH_USER', payload: response.data})
};



// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);
//
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${userId}`);
//     dispatch({type: 'FETCH_USER', payload: response.data})
// });