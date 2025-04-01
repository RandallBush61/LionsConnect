import React from 'react';
import { Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MySignup from '../Signup/Signup';
import './Login.css'

const MyLogin = (props) => {
  return (
    <Form className = 'login'>
      <h1>Welcome to the Login Page!</h1>
      <FormGroup className >
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="i.e Bob@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="i.e password123" />
      </FormGroup>
      
      <Route exact path= '/sign-up' component = {MySignup}/>
      <a href='/sign-up'>New to LionsConnect? Sign-up Here!</a>
      <h1> </h1>

      <Button>Submit</Button>
    </Form>
  );
}

export default MyLogin;