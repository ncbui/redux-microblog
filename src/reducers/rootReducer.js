import { combineReducers } from 'redux';
import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import postReducer from './posts';
import commentReducer from './comments';
import {starterBlog} from './starterBlog';


// TODO: we set initial state in rootReducer, 
// research options for setting default in individual reducers
// const combinedInitialState = {
//   posts: {},
//   comments: {}
// }



// export default function rootReducer(state = combinedInitialState, action) {
export default function rootReducer(state = starterBlog, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: postReducer(state.posts, action),
        comments: commentReducer(state.comments, action)
      }}

    case EDIT_POST: {
      return {
        ...state,
        posts: postReducer(state.posts, action),      }
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: postReducer(state.posts, action),
        comments: commentReducer(state.comments, action)
      }
    }

    case ADD_COMMENT: {
      return {
          ...state,
          comments: commentReducer(state.comments, action)
      }
    } 

    case DELETE_COMMENT: {
      return {
        ...state,
        comments: commentReducer(state.comments, action)
      }
    }

    default:
      return state
  }
}