import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { createTheme } from '@mui/material/styles';

/**
 * The client landing page is the first page that clients see after logging in
 * It will present some information, and then ask them if they are looking to source supplies or purchase safety management
 * They will be redirected to the appropriate page based on their decision
 */

class ClientLanding extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <div style={{
                    display: 'flex',
                    alignItems: 'Justify',
                    justifyContent: 'Left',
                }}>
                    <p style={{color:"#ffffff"}}>KOACORE is a full-scale safety management firm. As leaders in event management and COVID safety, we partner with best-in-class technology platforms, manufacturers, medical advisors, and staffing companies to provide a one-stop-shop for all safety in a Covid and post-Covid environment. KOACORE is proud to be part of the Return to Live by ensuring our clients have access to best-in-class safety, guidance, equipment, and support.</p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                }}>
                        <Button variant="contained" component={Link} to="/trade">
                        I need to source supplies
                        </Button>
                        
                        <Button variant="contained" component={Link} to="/client-survey">
                        I'm looking for safety management for my event
                        </Button>
                </div>
            </div>
        );
    }
}

export default ClientLanding;