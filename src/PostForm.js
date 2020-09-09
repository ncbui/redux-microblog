import React, { useState } from 'react';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button
} from 'reactstrap';



/** Renders Form to edit/create posts
 * 
 * Prop:
 * - toggleIsEditing: Function passed from BlogPost to toggle isEditing state
 * 
 * State:
 * - formData: Object about form data
 * 
 */


function PostForm({ toggleIsEditing }) {
  const initialState = {
    title: "",
    description: "",
    body: ""
  }
  const [formData, setFormData] = useState(initialState);
  const { id } = useParams();
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // TODO: submit form data
    history.push("/");
  }

  // If form is rendered by BlogPost, toggle isEditing state
  // if not, redirect to homepage
  function cancelRedirect(evt) {
    if (id) {
      // console.log("this is id", id)
      toggleIsEditing()
    } else {
      // console.log("redirecting to /", id)
      history.push("/");
    }
  }

  return (
    <div className="PostForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="PostForm-title">Title</Label>
          <Input 
            id="PostForm-title"
            name="title" 
            value={formData.title}
            onChange={handleChange}
            type="text" 
          />
        </FormGroup>    

        <FormGroup>
          <Label for="PostForm-description">Description</Label>
          <Input 
            id="PostForm-description" 
            name="description"
            value={formData.description}
            onChange={handleChange}
            type="text" 
          />
        </FormGroup>

        <FormGroup>
          <Label for="PostForm-body">Body</Label>
          <Input 
            id="PostForm-body" 
            name="body"
            value={formData.body}
            onChange={handleChange}
            type="textarea" 
          />
        </FormGroup>

        <div className="row">
        <Button type="button" onClick={cancelRedirect} className="btn btn-secondary"> Cancel </Button>
        <Button>Submit</Button>
        </div>

      </Form>
    </div>
  );
}

export default PostForm;

