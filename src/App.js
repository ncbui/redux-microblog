import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './Navigation';
import Routes from './Routes';

// TODO: remove dispatching from other components
import { 
  addPost, 
  editPost, 
  deletePost, 
  addComment,
  deleteComment
  } from './reducers/actionCreator';

/** Renders App component
 * 
 * Prop
 * 
 * State
 * 
 * App -> {Navbar/Header, Routes}
 */


function App() {

  // TODO: keeping comments for reference; dispatch from other components

  // store.dispatch(addPost(1, { title: "new post" }))

  // store.dispatch(addPost(2, { title: "new post2" }))

  // store.dispatch(addComment(1, 1, { body: "new comment" }))

  // store.dispatch(addComment(1, 2, { body: "new comment2" }))

  // store.dispatch(deleteComment(1,1))

  // store.dispatch(deletePost(1))

  // store.dispatch(editPost(1, { title: "EDITED TITLE" }))



  function addBlogPost(formData) {
    // submit data
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
