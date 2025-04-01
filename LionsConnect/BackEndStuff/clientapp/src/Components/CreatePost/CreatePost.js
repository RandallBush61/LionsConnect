import React from 'react';
import "./CreatePost.css"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateMyPost = (props) => {
  return (
    <Form>
      <FormGroup className = 'Select'>
        <Label className = 'Text'>Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup className = 'SelectMult'>
        <Label className = 'Text' >Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup className = 'Postbox'>
        <Label className = 'Text'>Enter Post Here!</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button className = 'button'>Submit</Button>
    </Form>
  );
}
export default CreateMyPost;