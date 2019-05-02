import axios from 'axios';

export const FETCH_POST_STARTED = "FETCH_POST_STARTED";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";

const UNSPLASH_API = "https://api.unsplash.com/";

export const fetchPosts = () => dispatch => {
    dispatch({ type: FETCH_POST_STARTED });

    axios
        .get(
            `${UNSPLASH_API}photos/random/?query=hair&&count=100&&client_id=${
                process.env.REACT_APP_UNSPLASH_ACCESS_KEY
                }`
        )
        .then(res => {

            const postData = res.data.map(post => {
                return {
                    id: post.id,
                    username: post.user.username,
                    imageUrl: post.urls.small,
                    likes: post.likes,
                    description: post.description
                }
            });
            dispatch({
                type: FETCH_POST_SUCCESS,
                payload: postData
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_POST_FAILED,
                payload: err
            })
            console.log(err);
        });

}