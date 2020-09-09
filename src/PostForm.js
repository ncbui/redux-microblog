import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button
} from 'reactstrap';



/** Renders Form to edit/create posts
 * 
 * Prop
 * 
 * State
 * 
 */


function PostForm() {
  return (
    <div className="PostForm">
      <Form>
        <FormGroup>
          <Label for="title">title</Label>
          <Input type="text" name="title" id="title" defaultValue="title" />
        </FormGroup>    

        <FormGroup>
          <Label for="description">description</Label>
          <Input type="text" name="description" id="description" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <div className="row">
        <Link to="/" className="btn btn-secondary"> Cancel </Link>
        <Button>Submit</Button>
        </div>

      </Form>
    </div>
  );
}

export default PostForm;

