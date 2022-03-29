import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class ClientLanding extends React.Component {

    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button component={Link} to="/trade">
                    Trade
                    </Button>
                    <Button component={Link} to="/client-survey">
                    Events
                    </Button>
                </div>
            </div>
        );
    }
}

export default ClientLanding;