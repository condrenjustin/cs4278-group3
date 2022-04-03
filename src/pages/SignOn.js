import React from 'react';
import {GoogleLogin} from 'react-google-login';
import { Navigate } from "react-router-dom";
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
    email:""
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

    this.setState({
      id: await profile.getId(),
      name: await profile.getName(),
      img: await profile.getImageUrl(),
      email: await profile.getEmail()
    })
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
    // let info = null; // to display info, uncomment this and the block below and add {info} to the return()
    let nav = null;
    if(this.state.id !== ""){
      /*
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
      */

      // navigate to client or employee pages based on email extension
      if(this.state.email.includes("@koacore")){
       nav = (<Navigate to="/client-database" replace={true} />);
      } else {
       nav =  (<Navigate to="/client-landing" replace={true} />);
      }
    }
    

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
              key='AIzaSyDi6f8GTovPHez69kp77CvTSAEzSYBM__Q'
              buttonText="Continue with Google"
              onSuccess={this.onSignIn}
              onFailure={this.failLog}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
              theme="dark"
              width="200"
              className='google-button'
            />
            {nav}
        </div>
      </div>
    );
  }
}

export default SignOn;