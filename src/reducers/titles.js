import { 
  ADD_POST, 
  EDIT_POST, 
  DELETE_POST,
  LOAD_TITLES,
  LOAD_POST_DETAIL} from './actionTypes';

// TODO: comments after research

// const INITIAL_STATE = {
//   1: {
//     title: "POST"
//   }
// }
// export default function postReducer(state=INITIAL_STATE, action) {
export default function titleReducer(state = {}, action) {
  const titleId = action.payload?.titleId;
  const titleData = action.payload?.titleData;

  // console.log("titleReducer ran");
  switch (action.type) {
    case LOAD_TITLES: {
      console.log("LOAD_TITLES from titleReducer, action.payload is ", action.payload)
      const titlesList = action.payload

      let stateCopy = {...state}
      for (let title of titlesList) {
        console.log("looping title", title, "id is", title.id);
        stateCopy[title.id] = title;
      }
      //  console.log("stateCopy after loop", stateCopy)
      return (stateCopy)
    }

    case ADD_POST:
      // console.log("ADD_POST in postReducer. state is: ", state, "copy is ", { ...state, '999': postData})
      return ({
        ...state,
        [titleId]: titleData
      })
    
    case EDIT_POST:{
      console.log("EDIT_POST in postReducer. state before edits is: ", state)
      return ({
        ...state,
        [titleId]: titleData
      })}

    case DELETE_POST:
      // console.log("this is state in delete post", state)
      const copyState = { ...state };
      delete copyState[titleId];
      return { ...copyState }

    default:
      return state;
  }
}