import React from 'react';

/** PostDisplay renders info about the post
 * 
 *  Props
 * - postData: information about the post
 * 
 *  BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 */
export default function PostDisplay({ postData }) {
  console.log("in PostDisplay, this is postData", postData)

  return (
    <div className="PostDisplay">
      <h1>{postData.title}</h1>
      <p>{postData.description}</p>
      <p>{postData.body}</p>
    </div>
  )
}