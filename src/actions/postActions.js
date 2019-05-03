import axios from 'axios';

export const FETCH_POST_STARTED = "FETCH_POST_STARTED";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILED = "FETCH_POST_FAILED";

export const GET_POST = "GET_POST";

//const UNSPLASH_API = "https://api.unsplash.com/";
const HAIRCARE_API = "https://haircare.herokuapp.com/api/";

export const fetchPosts = () => dispatch => {
    dispatch({ type: FETCH_POST_STARTED });

    axios
        .get(
            `${HAIRCARE_API}posts`
        )
        .then(res => {
            console.table(res.data);

            const postData = res.data.map(post => {
                const likes = Math.ceil(Math.random() * (500 - 1) + 1);
                return {
                    id: post.id,
                    //username: post.user.username,
                    imageUrl: post.image,
                    likes,
                    stylist_id: post.stylist_id,
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

export const getPost = postID => {
    return {
        type: GET_POST,
        payload: postID
    }
}
