import { FETCH_POST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILED, GET_POST } from "../actions/postActions";

const initialState = {
    fetchingPosts: false,
    selectedPost: null,
    fetchError: "",
    posts: null
}

export const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POST_STARTED:
            return { ...state, fetchingPosts: true };
        case FETCH_POST_SUCCESS:
            return { ...state, posts: action.payload, fetchingPosts: false, fetchError: false };
        case FETCH_POST_FAILED:
            return {...state, fetchingPosts: false, fetchError: action.payload }
        case GET_POST:
            const selectedPost = state.posts.find(post => post.id === action.payload);
            return { ...state, selectedPost }
        default:
            return state;
    }
}