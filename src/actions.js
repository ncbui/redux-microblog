import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

export function addPost(postId, postData) {
  return {
    type: ADD_POST,
    payload: {postId, postData}
  }
}

export function editPost(postId, postData) {
  return {
    type: EDIT_POST,
    payload: {postId, postData}
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: {postId}
  }
}

export function addComment(postId, commentId, commentData) {
  return {
    type: ADD_COMMENT,
    payload: {postId, commentId, commentData}
  }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: {postId, commentId}
  }
}
