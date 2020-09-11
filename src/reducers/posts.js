import { ADD_POST, EDIT_POST, DELETE_POST} from './actionTypes';

// TODO: comments after research

// const INITIAL_STATE = {
//   1: {
//     title: "POST"
//   }
// }

export default function postReducer(state = {}, action) {
  const postId = action.payload?.postId;
  const postData = action.payload?.postData;

  switch (action.type) {
    case ADD_POST:
      // console.log("ADD_POST in postReducer. state is: ", state, "copy is ", { ...state, '999': postData})
      return ({
        ...state,
        [postId]: postData
      })
    
    case EDIT_POST:{
      console.log("EDIT_POST in postReducer. state before edits is: ", state)
      return ({
        ...state,
        [postId]: postData
      })}

    case DELETE_POST:
      // console.log("this is state in delete post", state)
      const copyState = { ...state };
      delete copyState[postId];
      return { ...copyState }

    default:
      return state;
  }
}