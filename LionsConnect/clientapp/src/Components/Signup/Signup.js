import React from 'react';
import { Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MyLogin from '../Login/Login';
import './Signup.css'


const MySignup = (props) => {
  return (
    
    <Form className = 'signup'>
        <h1>New? Sign Up Here!</h1>
    
    <FormGroup>
        <Label for="exampleUsername">Username</Label>
        <Input type= "Username" name="User" id="exampleUsername" placeholder="Enter Username Here!"/>
    </FormGroup>
    <FormGroup>
        <Label for="exampleFLName">First and Last Name</Label>
        <Input type= "FLName" name="FirLas" id="exampleFLName" placeholder="Enter First/Last Name Here!"/>
    </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter E-Mail Here!" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter Password Here!" />
      </FormGroup>
    
      <Button>Submit</Button>
    </Form>
    
  );
};

export default MySignup;