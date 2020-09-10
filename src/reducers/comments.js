import { ADD_COMMENT, DELETE_COMMENT } from '../actionTypes';


const INITIAL_STATE = {
  1: {
    2: "comment"
  }
}

export default function commentReducer(state=INITIAL_STATE, action) {
  const postId = action.payload?.postId;
  const commentId = action.payload?.commentId;
  const commentData = action.payload?.commentData;
  switch (action.type) {
    case ADD_COMMENT:
      return ({
        ...state,
        [postId]: {...state[postId], [commentId]: commentData}
      })

    case DELETE_COMMENT:
      return state

    default:
      return state;
  }
}
