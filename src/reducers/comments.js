import { ADD_COMMENT, DELETE_COMMENT, ADD_POST, DELETE_POST } from './actionTypes';

// TODO: comments after research
// const INITIAL_STATE = {
//   1: {
//     2: "comment"
//   }
// }

// export default function commentReducer(state=INITIAL_STATE, action) {
export default function commentReducer(state, action) {
  const postId = action.payload?.postId;
  const commentId = action.payload?.commentId;
  const commentData = action.payload?.commentData;
  switch (action.type) {
    case ADD_COMMENT:
      return ({
        ...state,
        [postId]: {...state[postId], [commentId]: commentData}
      })

    case DELETE_COMMENT:{
      delete state[postId][commentId]
      return { ...state }
    }

    case ADD_POST: {
      return ({
        ...state,
        [postId]: { }
      })
    } 
    case DELETE_POST: {
      delete state[postId];
      return { ...state }
    }

    default:
      return state;
  }
}
