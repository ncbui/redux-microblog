import React from 'react';
import PostList from './PostList';


/** Renders Homepage component
 * 
 * App -> Homepage -> PostList
 */


function Homepage() {
  return (
    <div className="Homepage">
      <p> Welcome to <b>MICROBLOG</b>, our innovative site for postyposts</p>
      <PostList />
    </div>
  );
}

export default Homepage;
