import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay';


/** Renders BlogPost component
 * 
 * Prop
 * 
 * State:
 * - isEditing: Boolean to decide to show edit form or post info
 * 
 * Routes -> BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 */


function BlogPost() {
  const [isEditing, setIsEditing] = useState(false);

  const history = useHistory();

  const starterBlog = {
    title: "Our first blog post",
    description: "orange sky, but we keep try",
    body: "OH NO ORANGE",
    id: 1,
    comments: {
      comment1: { body: "hello" },
      comment2: { body: "nice work" },
      comment3: { body: "wowza" },
      comment4: { body: "¯\\_(ツ)_/¯" }
    }
  }

  function toggleIsEditing(evt) {
    setIsEditing(isEditing => !isEditing);
  }

  function handleDelete(evt) {
    // TODO: delete post
    history.push("/");
  }

  function submitPostForm(data) {
    // dispatching
  }
  function submitCommentForm(data) {
    // dispatching
  }

  // TODO: replace starterblog with actual info
  function showPostOrForm() {
    if (isEditing) {
      return <PostForm
        toggleIsEditing={toggleIsEditing}
        submitForm={submitPostForm}
        postData={starterBlog} // TODO: change postData when backend implemented
      />;
    } else {
      return (
        <>
          <Button
            onClick={toggleIsEditing}>Edit</Button>
          <Button
            onClick={handleDelete}>Delete</Button>
          <PostDisplay
            postData={starterBlog} />
          <CommentList
            comments={starterBlog.comments} // TODO: change postData when backend implemented
          />
          <CommentForm
            submitComment={submitCommentForm} />
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
