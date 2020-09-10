import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PostForm from './PostForm';
import { useHistory, useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from './reducers/actionCreator';


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
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(store => store.posts[id]);
  const commentData = useSelector(store => store.comments[id])
  console.log("this is postData, comments", postData, commentData)

  // const starterBlog = {
  //   title: "Our first blog post",
  //   description: "orange sky, but we keep try",
  //   body: "OH NO ORANGE",
  //   id: 1,
  //   comments: {
  //     comment1: { body: "hello" },
  //     comment2: { body: "nice work" },
  //     comment3: { body: "wowza" },
  //     comment4: { body: "¯\\_(ツ)_/¯" }
  //   }
  // }

  function toggleIsEditing(evt) {
    setIsEditing(isEditing => !isEditing);
  }

  function handleDelete(evt) {
    // TODO: delete post
    history.push("/");
  }

  function submitPostForm(data, id) {
    console.log("submitPostForm ran, here is data, id", data, id)
    dispatch(editPost(id, data));
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
        postData={postData} // TODO: change postData when backend implemented
      />;
    } else {
      return (
        <>
          <Button
            onClick={toggleIsEditing}>Edit</Button>
          <Button
            onClick={handleDelete}>Delete</Button>
          <PostDisplay
            postData={postData} />
          <CommentList
            comments={commentData} // TODO: change postData when backend implemented
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
