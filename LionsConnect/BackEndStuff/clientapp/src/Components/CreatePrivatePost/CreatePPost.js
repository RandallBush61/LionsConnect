import React from 'react';
import "./CreatePPost.css"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateMyPPost = (props) => {
  return (
    <Form>
      
      <FormGroup className = 'Postbox'>
        <Label className = 'Text' >Enter Post Here!</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button className = 'button'>Submit</Button>
    </Form>
  );
}
export default CreateMyPPost;