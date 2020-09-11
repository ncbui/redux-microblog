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
  const dispatch = useDispatch()
  
  // get posts from API
  useEffect(() => {
    dispatch(getTitlesListFromAPI())
  }, [dispatch]); 
  
  
  // get state.title and state.isLoading from store
  const posts = useSelector(store => store.titles);
  const isLoading = useSelector(store => store.isLoading);

  // render posts with link
  function showPosts() {
    let postsToRender = Object.keys(posts);
    return postsToRender.map(currentId => (
      <li key={currentId}> 
        <Link to={`/${currentId}`}>
          <b>{posts[currentId].title}</b>
        </Link> 
        <em> {posts[currentId].description}</em>
      </li>
    ));
  }

  // show loading message if we haven't made api call for posts yet
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
