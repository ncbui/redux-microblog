import React from 'react';
import { Button } from 'reactstrap';

/** Comment renders a comment and a delete button for itself
 * 
 *  State
 * 
 *  Props
 * 
 *  CommentList -> Comment
 */
function Comment() {
  const firstComment = {
    body: "This is a cool post!"
  }

  function handleDelete(evt) {
    // TODO: delete comment
  }

  return (
    <div>
      <Button onClick={handleDelete}>X</Button>
      <p>{firstComment.body}</p>
    </div>
  )
}

export default Comment;