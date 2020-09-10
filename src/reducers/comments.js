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
      const copyPost = {...state[postId]}
      // console.log("copyState", copyState, "copyState[postId]", copyState[postId]);
      delete copyPost[commentId];
      return { ...state, [postId]: copyPost };
    }

    case ADD_POST: {
      return ({
        ...state,
        [postId]: { }
      })
    } 
    case DELETE_POST: {
      const copyState = {...state};
      delete copyState[postId];
      return { ...copyState }
    }

    default:
      return state;
  }
}
