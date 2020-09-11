import React, { useState } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import uuid from 'uuid/v4';
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
 * - submitForm: Function passed from parent to handle form submission
 * - toggleIsEditing (optional): Function passed from BlogPost to toggle isEditing state
 * - postData (optional): Data passed from BlogPost, used to edit existing blog post
 * 
 * State:
 * - formData: Object about form data
 * 
 * BlogPost -> {PostDisplay, PostForm, CommentList, CommentForm }
 * 
 */

function PostForm({ submitForm , toggleIsEditing, postData }) {
  const emptyForm = {
    title: "",
    description: "",
    body: ""
  }

  const initialState = postData ? postData : emptyForm;
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
    // console.log("handleSubmit ran, formData, id", formData, id)
    // if id is undefined, create it, parents always receive data and id
    if (id) {
      submitForm(formData, id);
    } else {
      submitForm(formData, uuid());
    }
    setFormData(emptyForm);
    history.push("/");
  }

  // If form is rendered by BlogPost, toggle isEditing state
  // if not, redirect to homepage
  function handleRedirect(evt) {
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
        <Button type="button" onClick={handleRedirect} className="btn btn-secondary"> Cancel </Button>
        <Button>Submit</Button>
        </div>

      </Form>
    </div>
  );
}

export default PostForm;

