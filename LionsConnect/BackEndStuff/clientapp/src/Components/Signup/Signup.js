import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from "reactstrap";
import MyLogin from "../Login/Login";
import axios from "axios";
import "./Signup.css";

const MySignup = (props) => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  var Databody = {
    UserName: UserName,
    password: password,
  };

  function isRegi() {
    axios({
      method: "post",
      url: "/api/registration",
      data: Databody,
    })
      .then((r) => {
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
 

  return (
    <Form className="signup">
      <h1>New? Sign Up Here!</h1>

      <FormGroup>
        <Label for="exampleUsername">Username</Label>
        <Input
          type="Username"
          name="User"
          id="exampleUsername"
          placeholder="Enter Username Here!"
          onChange={(e) => {
            setUserName( e.target.value );
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Enter Password Here!"
          onChange={(e) => {
            setPassword(e.target.value );
          }}
        />
      </FormGroup>

      <Route exact path="/login" component={MyLogin} />
      <a href="/login">Already Signed up? Login Here!</a>
      <h1></h1>

      <Button className = "button" onClick={isRegi}> Submit</Button>
      
    </Form>
    
  
  );
        
  

};

export default MySignup;
