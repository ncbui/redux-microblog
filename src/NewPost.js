import React from 'react';
import {Link} from 'react-router-dom';
import PostForm from './PostForm';
import { useDispatch } from 'react-redux';
import { addPost } from './reducers/actionCreator';


/** Renders NewPost component
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> NewPost -> PostForm (new)
 */


function NewPost() {

  const dispatch = useDispatch();

  function submitForm(data, id) {
    dispatch(addPost(id, data));
  }

  return (
    <div className="NewPost">
      <h1>New Post</h1>
      <PostForm submitForm={submitForm}/>
    </div>
  );
}

export default NewPost;
