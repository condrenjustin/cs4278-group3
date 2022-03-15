import React from 'react';
import NavBar from '../components/NavBar';

class ClientSurvey extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <h1 style={{color:"#ffffff"}}>Client Survey</h1>
            </div>
        );
    }
}

export default ClientSurvey;