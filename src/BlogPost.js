import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import PostForm from './PostForm';
import { useHistory, useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay';
import { useSelector, useDispatch } from 'react-redux';
import {
  editPost,
  deletePost,
  addComment,
  deleteComment,
  getPostFromAPI,
  startLoad, endLoad
} from './reducers/actionCreator';


/** Renders BlogPost component
 * 
 * State
 * - isEditing: Boolean to decide to show edit form or post info
 * 
 * Redux
 * - can access store
 * - can dispatch to store
 * 
 * Routes -> BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 */


function BlogPost() {
  const [isEditing, setIsEditing] = useState(false);
  
  const history = useHistory();
  
  const dispatch = useDispatch();
  
  const { id } = useParams();
  
  useEffect(() => {
    // console.log("useEffect in BlogPost ran")
    dispatch(getPostFromAPI(id));
  }, [dispatch, id]);
  
  const postData = useSelector(store => store.posts[id]);
  // console.log("postData", postData); 
 

  // const commentData = []
  const commentData = useSelector(store => store.posts[id]?.comments) //this is an array instead of obj
  // console.log("this is postData, comments", postData, commentData)


  function toggleIsEditing(evt) {
    setIsEditing(isEditing => !isEditing);
  }

  function submitPostForm(data, id) {
    // console.log("submitPostForm ran, here is data, id", data, id)
    dispatch(editPost(id, data));
  }

  function handleDeletePost(evt) {
    dispatch(deletePost(id))
    history.push("/");
  }

  function submitCommentForm(data, commentId) {
    dispatch(addComment(id, commentId, data))
  }

  function handleDeleteComment(commentId) {
    dispatch(deleteComment(id, commentId))  
  }

  function showPostOrForm() {
    if (isEditing) {
      return <PostForm
        toggleIsEditing={toggleIsEditing}
        submitForm={submitPostForm}
        postData={postData}
      />;
    } else {
      return (
        <>
          <Button
            onClick={toggleIsEditing}>Edit</Button>
          <Button
            onClick={handleDeletePost}>Delete</Button>
          <PostDisplay
            postData={postData} />
          <CommentList
            comments={commentData}
            deleteComment={handleDeleteComment}
          />
          <CommentForm
            submitComment={submitCommentForm} />
        </>
      )
    }
  }

  return (
    <div className="BlogPost">
      {!postData &&
        <p>Loading...</p>
      }
      {postData &&
        showPostOrForm()
      }
    </div>
  );
}

export default BlogPost;
