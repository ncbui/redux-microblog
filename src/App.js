import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './Navigation';
import Routes from './Routes';
import { createStore } from 'redux';
import reducer from './reducers/index'

/** Renders App component
 * 
 * Prop
 * 
 * State
 * 
 * App -> {Navbar/Header, Routes}
 */


function App() {

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log("this is state:", store.getState())

  store.dispatch({
    type: 'ADD_POST',
    payload: {postId: 1, postData: {title: "new post"}}
  })

  store.dispatch({
    type: 'ADD_POST',
    payload: {postId: 2, postData: {title: "new post2"}}
  })

  store.dispatch({
    type: 'ADD_COMMENT',
    payload: {postId: 1, commentId: 1, commentData: {body: "new comment"}}
  })

  store.dispatch({
    type: 'ADD_COMMENT',
    payload: {postId: 1, commentId: 2, commentData: {body: "new comment2"}}
  })

  store.dispatch({
    type: 'DELETE_POST',
    payload: {postId: 1}
  })

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
