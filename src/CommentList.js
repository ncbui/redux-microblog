import React from 'react';

/** CommentList renders each comment for post
 * 
 *  Props
 * - comments: comments for the post {id: {},...}
 * - deleteComment: function passed from BlogPost to handle comment deletion
 * 
 *  BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 */
function CommentList({comments, deleteComment}) {
  // console.log("<CommentList />, comments is: ", comments)

  function handleDeleteComment(evt) {
    // console.log("evt.target", evt.currentTarget.id)
    const commentId = evt.currentTarget.id;
    deleteComment(commentId);
  }

  // map over comments and list each one
  function showComments() {
    return comments.map(comment => (
      <li key={comment.id}> 
        <button id={comment.id} onClick={handleDeleteComment}> X </button> 
        {comment.text}
      </li>
    ));
  }

  return (
    <div>
      <h3>Comments</h3>
      {showComments()}
    </div>
  )
}

export default CommentList;