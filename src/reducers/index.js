import { combineReducers } from 'redux';
import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';
import postReducer from './posts';
import commentReducer from './comments';

const combinedInitialState = {
  posts: {},
  comments: {}
}

function combinedReducer(state=combinedInitialState, action) {
  switch (action.type) {
    case DELETE_POST:
      posts
  }
}

function combinedReducer(state, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: posts(state.posts, action),
        comments: {...comments}
      }

    case DELETE_POST: {
      return {
        posts: posts(state.posts, action),
        comments: sliceReducerB(state.comments, action)
      }
    }
    // case 'SOME_SPECIAL_ACTION': {
    //   return {
    //     // specifically pass state.b as an additional argument
    //     a: sliceReducerA(state.a, action, state.b),
    //     b: sliceReducerB(state.b, action)
    //   }
    // }
    // case 'ANOTHER_SPECIAL_ACTION': {
    //   return {
    //     a: sliceReducerA(state.a, action),
    //     // specifically pass the entire state as an additional argument
    //     b: sliceReducerB(state.b, action, state)
    //   }
    // }
    default:
      return state
  }
}