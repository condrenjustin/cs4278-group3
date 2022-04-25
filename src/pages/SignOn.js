/**
 * Group 3
 * 
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import React from 'react';
import { Button } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthProvider';
import logo from '../images/KOA_only_White.PNG';
import "../styles/SignOn.css"

/** The sign on page makes users sign in with Google SSO
 * Users are redirected based on whether they have a koacore email or not
 */

class SignOn extends React.Component {
  // store users Google Account info
  state = {
    id:"",
    name:"",
    img:"",
    email:"",
    guest: false
  }

  /**
   * On successful sign in, get the user's information
   * @param {GoogleUser} googleUser 
   */
  onSignIn = async(googleUser) => {
    var profile = googleUser.getBasicProfile();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    this.props.setCurrentUser(await profile.getEmail());

    this.setState({
      id: await profile.getId(),
      name: await profile.getName(),
      img: await profile.getImageUrl(),
      email: await profile.getEmail()
    });

    if(this.state.email.includes("@koacore")){
      this.props.navigate('/client-database');
     } else {
      this.props.navigate('/client-landing');
     }
  }

  /**
   * log an error if logout is unsuccessful
   * @param {error} response The error that caused the failure
   */
  failLog(response){
    console.log("Failed");
    console.log(response);
  }

  /**
   * On success, we reset the state
   */
  logout = async() => {
    console.log("Logout called");
    this.setState({
      id:"",
      name:"",
      img:"",
      email:""
    });
  }

  /**
   * Component hook to render a page
   * @returns page to render
   */
  render() {
    /*
    // let info = null; // to display info, uncomment this and the block below and add {info} to the return()
    if(this.state.id !== ""){
      
      info = (<div>
        <p>ID: {this.state.id}</p>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <img src={this.state.img} alt="profile" style={{borderRadius:"50%"}}></img>
        <div>
          <GoogleLogout
            clientId="1075606334020-sdhvje80qvau18224tlqfb0g1gb5dqeb.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.failLog}
          >
          </GoogleLogout>
        </div>
      </div>)
    }
    */

    return(
      <div>
        <div style={{marginTop:"5%", marginBottom:"5%"}}>
          <img src={logo} alt='KOACORE Logo' style={{width:"60%"}}></img>
        </div>
        <div>
            <GoogleLogin
              clientId="1075606334020-sdhvje80qvau18224tlqfb0g1gb5dqeb.apps.googleusercontent.com"
              discoveryDocs={["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}
              scope='https://www.googleapis.com/auth/calendar.events'
              key= {process.env.REACT_APP_GKEY}
              buttonText="Continue with Google"
              onSuccess={this.onSignIn}
              onFailure={this.failLog}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              theme="dark"
              width="200"
              className='google-button'
            />
        </div>
        <Button onClick={()=>this.props.navigate('/client-landing')} 
        variant='outline-light'
        style={{marginTop:'20px'}}
        >Continue as Guest</Button>
      </div>
    );
  }
}

export default function(props) {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  return <SignOn {...props} setCurrentUser={setCurrentUser} navigate={navigate}/>;
}