import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button
} from 'reactstrap';

/** CommentForm renders a form to submit a new comment to a post
 * 
 *  State:
 *  - formData: Object about form data
 * 
 *  Props
 * - submitComment: function from parent to handle form submission
 * 
 *  BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 */
function CommentForm({submitComment}) {
  const initialState = {
    body: ""
  }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // create uuid, pass to parent with submitComment
    submitComment(formData, uuid());
    setFormData(initialState);
  }

  return (
    <Form className="CommentForm" onSubmit={handleSubmit}>
      <FormGroup>
          <Label for="CommentForm-body"></Label>
          <Input 
            id="CommentForm-body"
            name="body" 
            value={formData.body}
            onChange={handleChange}
            placeholder="New Comment"
            type="text" 
          />
        </FormGroup>
        <Button>Add</Button>
    </Form>
  )
}

export default CommentForm;