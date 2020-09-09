import React, { useState } from 'react';
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
 * 
 *  CommentList -> CommentForm
 */
function CommentForm() {
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
    // TODO: submit comment data
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