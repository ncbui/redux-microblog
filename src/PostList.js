import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment
} from './reducers/actionCreator';


/** Renders PostList component
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> PostList
 */


function PostList() {

  // const starterBlog = {
  //   title: "Our first blog post",
  //   description: "orange sky, but we keep try",
  //   body: "OH NO ORANGE",
  //   id: 1
  // }

  // get state.posts from store
  const posts = useSelector(store => store.posts);
  // for each post, generate a link
  console.log("dxfgchvjbknlm POSTS IS: " , posts)

  // loop over keys of posts, key = id
  // for each keys

  return (
    <div className="PostList">
      <ul>
        {/* {posts.map(post => <li> <Link to={`/${post.id}`}><b>{post.title}</b></Link> <em> {post.description}</em></li>)} */}
      </ul>
    </div>
  );
}

export default PostList;
