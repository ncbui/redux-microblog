import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';
import CommentList from './CommentList';


/** Renders BlogPost component
 * 
 * Prop
 * 
 * State:
 * - isEditing: Boolean to decide to show edit form or post info
 * 
 * Routes -> BlogPost -> PostForm (edit)
 */


function BlogPost() {
  const [isEditing, setIsEditing] = useState(false);

  const history = useHistory();

  const starterBlog = {
    title: "Our first blog post",
    description: "orange sky, but we keep try",
    body: "OH NO ORANGE",
    id: 1
  }

  function toggleIsEditing(evt) {
    setIsEditing(isEditing => !isEditing);
  }

  function handleDelete(evt) {
    // TODO: delete post
    history.push("/");
  }

  function showPostOrForm() {
    if (isEditing) {
      //TODO: pass post info down as props
      return <PostForm toggleIsEditing={toggleIsEditing} />;
    } else {
      return (
        <>
          <div>
            <h1>{starterBlog.title}</h1>
            <p>{starterBlog.description}</p>
            <p>{starterBlog.body}</p>
            <Button onClick={toggleIsEditing}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
          <div>
            <CommentList />
          </div>
        </>
      )
    }
  }

  return (
    <div className="BlogPost">
      {showPostOrForm()}
    </div>
  );
}

export default BlogPost;
