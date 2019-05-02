import { FETCH_POST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILED } from "../actions/postActions";

const initialState = {
    fetchingPosts: false,
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
        default:
            return state;
    }
}