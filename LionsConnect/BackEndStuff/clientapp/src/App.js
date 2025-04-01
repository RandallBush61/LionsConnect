import React from 'react';
import './App.css';
import MyNav from './Components/Nav/Nav';
import MyLogin from './Components/Login/Login';
import MyJumbotron from './Components/Jumbotron/Jumbotron';
import MySignup from './Components/Signup/Signup';
import MyAboutJumbo from './Components/AboutJumbotron/AboutJumbotron';
import CreateMyPost from './Components/CreatePost/CreatePost';
import CreateMyPPost from './Components/CreatePrivatePost/CreatePPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from "react-router-dom";
import { Jumbotron } from 'reactstrap';


document.body.style.backgroundColor= '#006633'

function App() { 
 

    return (
    <div className="App">
    <BrowserRouter>
    <MyNav/>
      <Switch>
        <Route exact path = "/login" component = {MyLogin}/>
        <Route exact path = "/" component = {MyJumbotron}/>
        <Route exact path = "/aboutus" component = {MyAboutJumbo}/>
        <Route exact path = "/sign-up" component = {MySignup}/>
        <Route exact path = "/createpost" component = {CreateMyPost}/>
        <Route exact path = "/createprivatepost" component = {CreateMyPPost}/>
      </Switch>
    </BrowserRouter>  
  
    </div>
  );
    }

export default App;
