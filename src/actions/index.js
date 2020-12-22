import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
    const promise = jsonPlaceHolder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};