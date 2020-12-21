import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = async () => {
    // bad approach for redux. not meant to do something like this
    const response = await jsonPlaceHolder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};