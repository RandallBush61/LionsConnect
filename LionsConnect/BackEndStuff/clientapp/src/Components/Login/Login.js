import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MySignup from '../Signup/Signup';
import './Login.css'
import axios from 'axios';


const MyLogin = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  var Databody = {
    UserName: UserName,
    password: Password,
  };

  function isLoggedIn() {
    axios({
    method: "post",
    url: "/api/loginsystem",
    data: {
      Databody,
    }
    })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });
    
  }


  

  return (
    <Form className = 'login'>
      <h1>Welcome to the Login Page!</h1>
      <FormGroup >
        <Label for="exampleUsername">Username</Label>
        <Input 
        type="username" 
        name="username" 
        id="exampleUsername" 
        placeholder="i.e Wewlad123" 
        onChange={(e) => {
          setUserName( e.target.value);
        }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input 
        type="password" 
        name="password" 
        id="examplePassword" 
        placeholder="i.e password123" 
        onChange={(e) => {
          setPassword( e.target.value);
        }} 
        />
      </FormGroup>
      
      <Route exact path= '/sign-up' component = {MySignup}/>
      <a href='/sign-up'>New to LionsConnect? Sign-up Here!</a>
      <h1> </h1>

      <Button className='button' onClick = {isLoggedIn}> Submit</Button> 
    </Form>
  );
}
 
export default MyLogin;

