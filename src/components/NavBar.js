/**
 * Group 3
 * 
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import React from 'react';
import {GoogleLogout} from 'react-google-login';
import {Nav, Navbar, Container} from 'react-bootstrap'
import { useNavigate, Navigate } from "react-router-dom";
import logo from '../images/Koa-1.webp';

class NavBar extends React.Component {
    state = {
        logOut: null // assign when the user logs out so that we can navigate back to the SignOn screen
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
     * On success, we navigate back to the SignOn page
     */
    logout = async() => {
        console.log("Logout called");
        this.setState({
            logOut: (<Navigate to="/" replace={true} />) // Rendering this component navigates to SignOn.js
        });
    }

    /**
     * Add the appropriate links to the Navbar based on whether the user is an employee or client
     * @returns Navbar links to render
     */
    insertLinks = () =>{
        if(this.props.employee){ // set employee to true if the user is an employee when calling this component
            return(
                <>
                    <Nav.Item><Nav.Link onClick={() => this.props.navigate('/client-database')}>Client Database</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link onClick={() => this.props.navigate('/calendar')}>Calendar</Nav.Link> </Nav.Item>
                </>
            );
        } else {
            return(<Nav.Item><Nav.Link onClick={() => this.props.navigate('/client-survey')}>Survey</Nav.Link> </Nav.Item>);
        }
    }

    /**
     * Component hook to render a page
     * @returns page to render
     */
    render(){
        return(
            <div>
                <div style={{height:'80px'}}/>
                {this.state.logOut}
                <Navbar 
                    collapseOnSelect
                    expand="lg" 
                    bg='dark' 
                    variant = 'dark' 
                    fixed='top'
                    className="ms-auto color-nav" 
                >
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} alt='KOACORE Logo' style={{width:"200px"}} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end" style={{ flex: 1}}>
                                <Nav.Item><Nav.Link href="https://www.koacore.com/">Primary Site</Nav.Link> </Nav.Item>
                                {this.insertLinks()}
                                <Nav.Item><Nav.Link href="https://www.koacore.com/contact-us">Contact Us</Nav.Link> </Nav.Item>
                                <Nav.Item style={{marginLeft: "20px"}}>
                                    <GoogleLogout
                                        clientId="1075606334020-sdhvje80qvau18224tlqfb0g1gb5dqeb.apps.googleusercontent.com"
                                        buttonText="Log Out"
                                        onLogoutSuccess={this.logout}
                                        onFailure={this.failLog}
                                        className='google-button'
                                    >
                                    </GoogleLogout>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default function(props) {
    const navigate = useNavigate();

    return <NavBar {...props} navigate={navigate}/>;
}