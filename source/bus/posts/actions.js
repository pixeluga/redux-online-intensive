// Types
import { types } from './types';

export const postsActions = {
    // Sync
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    removePost: (post) => {
        return {
            type:    types.REMOVE_POST,
            payload: post,
        };
    },
    likePost: (likedPostData) => {
        return {
            type:    types.LIKE_POST,
            payload: likedPostData,
        };
    },
    unlikePost: (likedPostData) => {
        return {
            type:    types.UNLIKE_POST,
            payload: likedPostData,
        };
    },

    // Async
    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (id) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: id,
        };
    },
    likePostAsync: (postId) => {
        return {
            type:    types.LIKE_POST_ASYNC,
            payload: postId,
        };
    },
    unlikePostAsync: (postId) => {
        return {
            type:    types.UNLIKE_POST_ASYNC,
            payload: postId,
        };
    },
};
