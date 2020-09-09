import React from 'react';
import {Link} from 'react-router-dom';
import PostForm from './PostForm';


/** Renders NewPost component
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> NewPost -> PostForm (new)
 */


function NewPost() {

  function submitForm(data) {
    // dispatching
  }

  return (
    <div className="NewPost">
      <h1>New Post</h1>
      <PostForm submitForm={submitForm}/>
    </div>
  );
}

export default NewPost;
