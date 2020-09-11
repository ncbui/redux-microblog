import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTitlesListFromAPI } from './reducers/actionCreator';


/** Renders PostList component from store
 * 
 *  Redux
 * - can access store
 * - can dispatch to store
 * 
 * Routes -> PostList
 */


function PostList() {

  // console.log("dxfgchvjbknlm POSTS IS: " , posts)
  const dispatch = useDispatch()
  
  // get posts from API
  useEffect(() => {
    dispatch(getTitlesListFromAPI())
  }, [dispatch]); 
  
  
  // get state.title from store
  const posts = useSelector(store => store.titles);
  const isLoading = useSelector(store => store.isLoading);
  // const posts = {}

  // render posts with link
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
        {isLoading &&
        <p>Loading...</p>}
        {!isLoading &&
        showPosts()}
      </ul>
    </div>
  );
}

export default PostList;
