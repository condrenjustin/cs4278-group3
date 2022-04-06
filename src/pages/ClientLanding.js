/**
 * Group 3
 * Homework 3
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { createTheme } from '@mui/material/styles';

/**
 * The client landing page is the first page that clients see after logging in
 * It will present some information, and then ask them if they are looking to source supplies or purchase safety management
 * They will be redirected to the appropriate page based on their decision
 */

class ClientLanding extends React.Component {
    render(){
        return(
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
                >
                    Welcome to KOACORE
                </Typography>
                <Typography variant="h5" align="center" color="white" paragraph>
                KOACORE is a full-scale safety management firm. As leaders in event management and COVID safety, 
                we partner with best-in-class technology platforms, manufacturers, medical advisors, and staffing companies to provide a one-stop-shop 
                for all safety in a Covid and post-Covid environment. 
                KOACORE is proud to be part of the Return to Live by ensuring our clients have access to best-in-class safety, guidance, equipment, and support.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                <Button variant="contained">Source Supplies</Button>
                <Button variant="contained">Safety Management</Button>
                </Stack>
            </Container>
            /* <div>
                <NavBar />
                <br></br>
                <div style={{
                    display: 'flex',
                    alignItems: 'Justify',
                    justifyContent: 'Left',
                    width:'80%',
                    margin: 'auto',
                    marginTop: '40px'
                }}>
                    <p style={{color:"#ffffff"}}>KOACORE is a full-scale safety management firm. As leaders in event management and COVID safety, we partner with best-in-class technology platforms, manufacturers, medical advisors, and staffing companies to provide a one-stop-shop for all safety in a Covid and post-Covid environment. KOACORE is proud to be part of the Return to Live by ensuring our clients have access to best-in-class safety, guidance, equipment, and support.</p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:'80%',
                    margin: 'auto',
                    marginTop:'40px'
                }}>
                        <Button style={{margin:'auto'}} variant="contained" component={Link} to="/trade">
                        I need to source supplies
                        </Button>
                        
                        <Button style={{margin:'auto'}} variant="contained" component={Link} to="/client-survey">
                        I'm looking for safety management for my event
                        </Button>
                </div>
            </div> */
        );
    }
}

export default ClientLanding;