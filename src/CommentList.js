import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

/** Comments renders a list of Comment components and a CommentForm component
 * 
 *  State
 * 
 *  Props
 * 
 *  BlogPost -> CommentList -> {Comment, CommentForm}
 */
function CommentList() {


  return (
    <div>
      <h3>Comments</h3>
      {/* list of comments */}
      <Comment />
      <CommentForm />
    </div>
  )
}

export default CommentList;