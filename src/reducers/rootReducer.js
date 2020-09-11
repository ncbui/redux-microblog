import { 
  ADD_POST, 
  EDIT_POST, 
  DELETE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT,
  LOAD_TITLES,
LOAD_POST_DETAIL
 } from './actionTypes';
import postReducer from './posts';
import titleReducer from './titles';



// TODO: we set initial state in rootReducer, 
// research options for setting default in individual reducers
const combinedInitialState = {
  posts: {},
  titles: {}
}


/* TODO: 
- combineReducer does the same thing; research
- simpleReducer can set their default
 */

export default function rootReducer(state = combinedInitialState, action) {
  switch (action.type) {
    case LOAD_TITLES: {
      console.log("LOAD_TITLES from rootReducer")
      return {
        ...state,
        titles: titleReducer(state.titles, action)
      }
    }

    case ADD_POST: {
      return {
        ...state,
        posts: postReducer(state.posts, action),
        titles: titleReducer(state.titles, action)
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
        titles: titleReducer(state.titles, action)
      }
    }

    // TODO: chenage comment handling

    // case ADD_COMMENT: {
    //   return {
    //       ...state,
    //       titles: titleReducer(state.titles, action)
    //   }
    // } 

    // case DELETE_COMMENT: {
    //   return {
    //     ...state,
    //     posts: { ...state.posts},
    //     titles: titleReducer(state.titles, action)
    //   }
    // }

    default:
      return state
  }
}