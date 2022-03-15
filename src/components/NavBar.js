import React from 'react';
import {GoogleLogout} from 'react-google-login';
import {Nav, Navbar, Container} from 'react-bootstrap'
import { Navigate } from "react-router-dom";
import logo from '../images/Koa-1.webp';

class NavBar extends React.Component {
    state = {
        logOut: null
    }

    failLog(response){
        console.log("Failed");
        console.log(response);
    }
    
    logout = async() => {
        console.log("Logout called");
        this.setState({
            logOut: (<Navigate to="/" replace={true} />)
        });
    }

    render(){
        return(
            <div>
                <div style={{height:'80px'}}/>
                {this.state.logOut}
                <Navbar 
                    collapseOnSelect
                    expand="lg" 
                    bg='primary' 
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
                                <Nav.Item><Nav.Link href="/choreboard">Account</Nav.Link> </Nav.Item>
                                <Nav.Item><Nav.Link href="/messageboard">Client Database</Nav.Link> </Nav.Item>
                                <Nav.Item><Nav.Link href="/bills">Survey</Nav.Link> </Nav.Item>
                                <Nav.Item><Nav.Link href="/profile">Contact Us</Nav.Link> </Nav.Item>
                                <Nav.Item style={{marginLeft: "20px"}}>
                                    <GoogleLogout
                                        clientId="1075606334020-sdhvje80qvau18224tlqfb0g1gb5dqeb.apps.googleusercontent.com"
                                        buttonText="Log Out"
                                        onLogoutSuccess={this.logout}
                                        onFailure={this.failLog}
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

export default NavBar;