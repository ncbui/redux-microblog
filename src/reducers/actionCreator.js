import { 
  LOAD_POST,
  ADD_POST, 
  EDIT_POST, 
  DELETE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT,
  LOAD_TITLES,
  SHOW_SPINNER,
  HIDE_SPINNER
} from './actionTypes';
import axios from 'axios';

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

// thunk action creator
// API can handle multiple requests
// option 1: a new thunk for each type of request
// option 2: mega-thunk with conditional logic to determine how to send request 

const BASE_API_URL = 'http://localhost:5000/api'

export function getTitlesListFromAPI (){
  return async function (dispatch) {
    dispatch(startLoad()); 

    try {
      let res = await axios.get(`${BASE_API_URL}/posts`);
      // console.log("response of API request to /posts is:", res.data)
      // sending [{},...] to actioncreator gotTitlesList, to dispatch
      // actioncreator: { type: "LOAD_TITLES",  [{},...] }

      dispatch(gotTitlesList(res.data)) //TODO: update
    } catch (err) {
      // dispatch(showErr(err.response.data));
    }
  }
}

export function getPostFromAPI (id){
  return async function (dispatch) {
    dispatch(startLoad()); // loadingspinner
    // dispatch(endLoad()); 

    try {
      let res = await axios.get(`${BASE_API_URL}/posts/${id}`);
      // console.log("response of API request to /posts/:id is:", res.data)
      // sending [{},...] to actioncreator gotTitlesList, to dispatch
      // actioncreator: { type: "LOAD_TITLES",  [{},...] }

      dispatch(gotPost(res.data))
      dispatch(endLoad()); 
    } catch (err) {
      // dispatch(showErr(err.response.data));
      console.error(err);
    }
  }
}

// normal action creator & action
// get posts and add to store
export function gotTitlesList(titleList) {
  return { type: LOAD_TITLES, payload: titleList };
}

export function gotPost(post) {
  return { type: LOAD_POST, payload: post };
}

// another normal action creator & action
// TODO: how to display this
export function showErr(msg) {
  return { type: "SHOW_ERR", msg };
}
// another normal action creator & action
// TODO: integrate into components
export function startLoad() {
  return { type: SHOW_SPINNER };
}

export function endLoad(){
  return { type: HIDE_SPINNER }
}