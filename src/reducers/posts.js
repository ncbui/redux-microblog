import { LOAD_POST, ADD_POST, EDIT_POST, DELETE_POST, DELETE_COMMENT} from './actionTypes';

// TODO: comments after research

// const INITIAL_STATE = {
//   1: {
//     title: "POST"
//   }
// }

export default function postReducer(state = {}, action) {
  const postId = action.payload?.postId;
  const postData = action.payload?.postData;
  const commentId = action.payload?.commentId;
  

  switch (action.type) {
    case LOAD_POST: {
      const post = action.payload;
      let stateCopy = {...state}; // DEBUGGING: just copy of state.posts
      stateCopy[post.id] = post;
      // console.log("LOAD_POST from postReducer, this is stateCopy", stateCopy)
  
      return stateCopy;
    }

    case ADD_POST:
      // console.log("ADD_POST in postReducer. state is: ", state, "copy is ", { ...state, '999': postData})
      return ({
        ...state,
        [postId]: postData
      })
    
    case EDIT_POST:{
      // console.log("EDIT_POST in postReducer. state before edits is: ", state)
      return ({
        ...state,
        [postId]: postData
      })}

    case DELETE_POST:
      // console.log("this is state in delete post", state)
      const copyState = { ...state };
      delete copyState[postId];
      return { ...copyState }

    case DELETE_COMMENT: {
      const postsKeyCopy = {...state};
      console.log("DELETE_COMMENT inside postReducer, postsKeyCopy", postsKeyCopy, "postsKeyCopy[postId].comments", postsKeyCopy[postId].comments );
      // filter array of comments
      const unfilteredComments = postsKeyCopy[postId].comments;
      let filteredComments = unfilteredComments.filter(comment => {
        console.log("filtering, comment.id is", comment.id, "commentId", commentId)
        if (comment.id.toString() !== commentId){
          return comment;
        }
      });

      // console.log("filteredComments", filteredComments)
      // console.log({ ...postsKeyCopy[postId], comments: filteredComments})

      // delete postsKeyCopy[postId].comments.[commentId];
      return { 
        ...postsKeyCopy, 
        [postId]: {...postsKeyCopy[postId],
                  comments: filteredComments}
        };
    }

    // case DELETE_COMMENT: {
    //   // TODO: changed copyPost => copyPostInComments per code review; revisit naming
    //   const copyPostInComments = { ...state[postId] }
    //   // console.log("copyState", copyState, "copyState[postId]", copyState[postId]);
    //   delete copyPostInComments[commentId];
    //   return { ...state, [postId]: copyPostInComments };
    // }

    default:
      return state;
  }
}