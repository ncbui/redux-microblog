import React from 'react';
import {Link} from 'react-router-dom';


/** Renders PostList component
 * 
 * Prop
 * 
 * State
 * 
 * Routes -> PostList
 */


function PostList() {

  const starterBlog = {
    title: "Our first blog post",
    description: "orange sky, but we keep try",
    body: "OH NO ORANGE",
    id: 1
  }
  return (
    <div className="PostList">
      <ul>
        <li> <Link to={`/${starterBlog.id}`}><b>{starterBlog.title}</b></Link> <em> {starterBlog.description}</em></li>
      </ul>
    </div>
  );
}

export default PostList;
