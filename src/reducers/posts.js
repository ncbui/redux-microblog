import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';


// Store
// {
//     posts: {
//         id: {
//             title, 
//             description, 
//             body,
//             comments: {
//                 commentID: {body: "hello"},
//                 commentID: {"nice work"},
//                 commentID: {"wowza"},
//                 commentID: { "¯\_(ツ)_/¯"}
//                 }
//             }
//     }
// }

const INITIAL_STATE = {
  1: {
    title: "POST"
  }
}

export default function postReducer(state=INITIAL_STATE, action) {
  const postId = action.payload?.postId;
  const postData = action.payload?.postData;
  const commentId = action.payload?.commentId;
  const commentData = action.payload?.commentData;
  switch (action.type) {
    case ADD_POST:
      return ({
        ...state,
        [postId]: postData
      })
    
    case EDIT_POST:
      return ({
        ...state,
        posts: {...state.posts, [postId]: postData}
      })

    case DELETE_POST:
      console.log("this is state in delete post", state)
      delete state[postId];
      // delete state.comments[postId];
      return {...state}

    default:
      return state;
  }
}