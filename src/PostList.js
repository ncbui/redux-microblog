import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


/** Renders PostList component from store
 * 
 *  Redux
 * - can access store
 * - can dispatch to store
 * 
 * Routes -> PostList
 */


function PostList() {

  // get state.posts from store
  const posts = useSelector(store => store.posts);
  // console.log("dxfgchvjbknlm POSTS IS: " , posts)
  
  // for each post, generate a link
  function showPosts() {
    let postsToRender = Object.keys(posts);
    // console.log("this is postsToRender", postsToRender)
    return postsToRender.map(currentId => (
      <li key={currentId}> 
        <Link to={`/${currentId}`}><b>{posts[currentId].title}</b></Link> <em> {posts[currentId].description}</em>
      </li>
    ));
  }

  return (
    <div className="PostList">
      <ul>
        {showPosts()}
      </ul>
    </div>
  );
}

export default PostList;
